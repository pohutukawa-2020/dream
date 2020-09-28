import React from 'react'
import renderer from 'react-test-renderer'

import EditRecipe from './EditRecipe'
import { RecipeProvider } from './RecipeContext'


it ('renders component correctly', () => {
    const fakeParams = {params:'dlGn8GmbocFvxe8kJJ01'}
    const blah = renderer
        .create(<RecipeProvider>
            <EditRecipe match={fakeParams}/>
            </RecipeProvider>)
        .toJSON()
    expect(blah).toMatchSnapshot()
})