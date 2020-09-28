import React from 'react'
import renderer from 'react-test-renderer'

import EditRecipe from './EditRecipe'
import { RecipeProvider } from './RecipeContext'


it ('renders component correctly', () => {
    const fakeParams = { params: 'dlGn8GmbocFvxe8kJJ01' }
    const fakeImage = {imagePath: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1064518_11-651c583.jpg?quality=90&webp=true&resize=375,341'}
    const blah = renderer
        .create(<RecipeProvider>
            <EditRecipe match={fakeParams} recipe={fakeImage}/>
            </RecipeProvider>)
        .toJSON()
    expect(blah).toMatchSnapshot()
})