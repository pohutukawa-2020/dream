import React, { useContext, useState } from 'react'
import MiscShoppingListItem from './MiscShoppingListItem'
import { clearShoppingList, clearMiscShoppingList, addMiscItem, sortList } from '../utils'
import ShoppingListItem from './ShoppingListItem'
import { UserContext } from './context/UserContext'

import { ShoppingListContext } from './context/ShoppingListContext'

function ShoppingList () {
  const {user} = useContext(UserContext)
  const [shoppingList] = useContext(ShoppingListContext)
  const [sortBy, setSortBy] = useState('NAME_ASC')
  const [newItem, setNewItem] = useState('')
  const [newItemQ, setNewItemQ] = useState('')
  const sortedShoppingList = sortList([...shoppingList], sortBy)

  const clearClickHandler = () => {
    clearShoppingList(user.uid)
    clearMiscShoppingList(user.uid)
  }
  
  const submitHandler = (e) => {
    e.preventDefault()
    addMiscItem(user.uid, newItemQ, newItem)
    setNewItem('')
    setNewItemQ('')
  }
  
  console.log('shopping list', shoppingList)


  return (
    <div className="ShoppingList">
      <h2 className='subtitle is-5 mb-0'>ShoppingList</h2>
      <button onClick={() => clearClickHandler()}>Clear Shopping List</button>
      {/* <MiscShoppingListItem /> */}
      <label>Sort By:</label>{' '}
        <select value={sortBy} onChange={evt => setSortBy(evt.target.value)}>
          <option value='NAME_ASC'>Name (A-Z)</option>
          <option value='NAME_DESC'>Name (Z-A)</option>
        </select>
      <form onSubmit={(e) => submitHandler(e)}>
        <label>Add item to Shopping List</label><br></br>
        <input type="number" placeholder='Quantity, ie 4' value={newItemQ} onChange={e => setNewItemQ(e.currentTarget.value)} />
        <input type="text" placeholder='Item, ie bananas' value={newItem} onChange={e => setNewItem(e.currentTarget.value)} />
        <button>Add</button>
      </form>
      <ul>
        {sortedShoppingList.map(shoppingListItem =>
          <li key={shoppingListItem.id}>
            <ShoppingListItem shoppingListItem={shoppingListItem}/>
          </li>
        )}
      </ul>
    </div>
  )
}

export default ShoppingList
