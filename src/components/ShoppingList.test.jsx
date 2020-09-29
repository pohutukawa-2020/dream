import React, { useState, useContext } from 'react'
import renderer from 'react-test-renderer'

import ShoppingList from './ShoppingList'

import { ShoppingListContext } from './context/ShoppingListContext'
import { MiscShoppingContext } from './context/MiscShoppingContext'

import MiscShoppingListItem from './MiscShoppingListItem'

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

export const FakeMiscShoppingProvider = ({ children }) => {
    const [miscCollection, setMiscCollection] = useState([])
    const [miscItem, setMiscItem] = useState([])

    return (
        <MiscShoppingContext.Provider value={[miscCollection, setMiscCollection]}>
          {children}
        </MiscShoppingContext.Provider>
      )
}



it ('renders component correctly', () => {
    const dream = renderer
    .create(
        <FakeShoppingListProvider>
            <FakeMiscShoppingProvider>
                <ShoppingList>
                    <MiscShoppingListItem/>
                </ShoppingList>
            </FakeMiscShoppingProvider>
           
        </FakeShoppingListProvider>
    )
    .toJSON()
expect(dream).toMatchSnapshot()
})