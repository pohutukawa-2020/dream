import React from 'react'
import renderer from 'react-test-renderer'

import RecipeCard from './RecipeCard'

it ('renders component correctly', () => {
    const blah = renderer
        .create(<RecipeCard/>)
        .toJSON()
    expect(blah).toMatchSnapshot()
})