import React from 'react'
import renderer from 'react-test-renderer'

import EditRecipe from './EditRecipe'
import { RecipeContext } from './RecipeContext'


it ('renders component correctly', () => {
    const fakeRecipe
    const blah = renderer
        .create(<EditRecipe/>)
        .toJSON()
    expect(blah).toMatchSnapshot()
})