import React from 'react'
import renderer from 'react-test-renderer'

import AddRecipe from './AddRecipe'

it ('renders component correctly', () => {
    const blah = renderer
        .create(<AddRecipe/>)
        .toJSON()
    expect(blah).toMatchSnapshot()
})