import React, { useContext } from 'react'
import MiscShoppingListItem from './MiscShoppingListItem'
import { clearShoppingList, clearMiscShoppingList } from '../utils'

import { ShoppingListContext } from '../components/ShoppingListContext'
import { UserContext } from '../components/UserContext'

function ShoppingList () {
  const {user} = useContext(UserContext)
  const [shoppingList] = useContext(ShoppingListContext)

  const onClickHandler = () => {
    clearShoppingList(user.uid)
    clearMiscShoppingList(user.uid)
  }

  return (
    <div className="ShoppingList">
      <h2 className='subtitle is-5 mb-0'>ShoppingList</h2>
      <button onClick={() => onClickHandler()}>Clear Shopping List</button>
      <MiscShoppingListItem />
      <ul>
        {shoppingList.map(shoppingListItem =>
          <li key={shoppingListItem.id}>
            {shoppingListItem.ingredients.map(ingredient => (
              <h5>{ingredient}</h5>
            ))}
          </li>
        )}
      </ul>
    </div>
  )
}

export default ShoppingList
