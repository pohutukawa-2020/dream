import React, { useState } from 'react'
import renderer from 'react-test-renderer'

import EditRecipe from './EditRecipe'
import { RecipeContext } from './context/RecipeContext'

export const FakeRecipeProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([{
    id: "MOqgTKsRp9OwepdSupbr",
    method: ["Preheat the oven to 200ºC/400ºF/gas 6. Peel 1 oni…"],
    serves: "4",
    prepTime: "40 Minutes - Not too tricky",
    name: "Roasted black bean burgers",
    ingredients: ["1½ red onions", "100 g rye bread", "ground corian…"],
    imagePath: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5858755.jpg"
    },
    {
        id: "29WXPJYg33PKdu0gAsTv",
    method: ["Preheat the oven to 190°C/375°F/gas 5.", "Melt 50…"],
    serves: "6",
    prepTime: "50 Minutes - Not too tricky",
    name: "Spinach lasagne",
    ingredients: ["70 g unsalted butter", "50 g plain flour", "800 m…"],
    imagePath: "https://img.jamieoliver.com/jamieoliver/recipe-database/2ipm2HQHql2Azq2dLfiA4k.jpg?tr=w-800,h-1066"
    }
])
  
    return (
        <RecipeContext.Provider value={[recipes, setRecipes]}>
          {children}
        </RecipeContext.Provider>
      )
    }
    
it ('renders component correctly', () => {
    const fakeParams = { params: {id: 'MOqgTKsRp9OwepdSupbr'} }
   
    const blah = renderer
        .create(
            <FakeRecipeProvider>
                <EditRecipe match={fakeParams}/>
            </FakeRecipeProvider>)
        .toJSON()
    expect(blah).toMatchSnapshot()
})

it ('renders component correctly', () => {
    const fakeParams = { params: {id: '29WXPJYg33PKdu0gAsTv'} }
   
    const blah = renderer
        .create(
            <FakeRecipeProvider>
                <EditRecipe match={fakeParams}/>
            </FakeRecipeProvider>)
        .toJSON()
    expect(blah).toMatchSnapshot()
})
