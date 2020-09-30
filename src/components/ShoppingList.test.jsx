import React, { useState, useContext } from 'react'
import renderer from 'react-test-renderer'

import ShoppingList from './ShoppingList'

import { ShoppingListContext } from './context/ShoppingListContext'

import ShoppingListItem from './ShoppingListItem'

export const FakeShoppingListProvider = ({ children }) => {
    const [shoppingList, setShoppingList] = useState([{
        id: "ShoppingListCollectionId",
        ingredients: ["1½ red onions", "100 g rye bread", "ground corian…"],
        recipeId: "testRecipeId"
    }])

    return (
        <ShoppingListContext.Provider value={[shoppingList, setShoppingList]}>
          {children}
        </ShoppingListContext.Provider>
      )
}

it ('renders component correctly', () => {
    const dream = renderer
    .create(
        <FakeShoppingListProvider>
                <ShoppingList>
                    <ShoppingListItem/>
                </ShoppingList>
        </FakeShoppingListProvider>
    )
    .toJSON()
expect(dream).toMatchSnapshot()
})