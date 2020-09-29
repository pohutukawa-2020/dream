import React, { useState, useEffect } from 'react'
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
    }])
  
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
