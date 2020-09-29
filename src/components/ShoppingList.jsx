import React, { useContext } from 'react'
import MiscShoppingListItem from './MiscShoppingListItem'
import { clearShoppingList } from '../utils'
import ShoppingListItem from './ShoppingListItem'
import { ShoppingListContext } from './context/ShoppingListContext'

function ShoppingList () {
  const [shoppingList] = useContext(ShoppingListContext)

  return (
    <div className="ShoppingList">
      <h2 className='subtitle is-5 mb-0'>ShoppingList</h2>
      <button onClick={() => clearShoppingList()}>Clear Shopping List</button>
      <MiscShoppingListItem />
      <ul>
        {shoppingList.map(shoppingListItem =>
          <li key={shoppingListItem.id}>
            {shoppingListItem.ingredients.map(ingredient => (
              // <h5>{ingredient}</h5>
              <ShoppingListItem ingredient={ingredient}/>
            ))}
          </li>
        )}
      </ul>
    </div>
  )
}

export default ShoppingList
