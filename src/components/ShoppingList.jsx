import React, { useContext } from 'react'

import ShoppingListItem from './ShoppingListItem'

import { ShoppingListContext } from '../components/ShoppingListContext'

function ShoppingList () {
  const [shoppingList, setShoppingList] = useContext(ShoppingListContext)

  return (
    <div className="ShoppingList">
      <h2>ShoppingList</h2>
      {/* <ShoppingListItem /> */}
      <ul>
        {shoppingList.map(shoppingListItem => 
          <li key={shoppingListItem.id}>
            {shoppingListItem.ingredients.map(ingredient => (
              <p>{ingredient}</p>
            ))}
          </li>
        )}
      </ul>
    </div>
  )
}

export default ShoppingList