import React, { useState, useContext } from 'react'
import renderer from 'react-test-renderer'
import { HashRouter } from 'react-router-dom'

import WeekList from './WeekList'

import { WeekContext } from './context/WeekContext'
import { RecipeContext } from './context/RecipeContext'
import { SelectedDayContext } from './context/SelectedDayContext'
import RecipeCard from './RecipeCard'
import { clearShoppingList, clearWeekDayAssignments } from '../utils'
import RecipesList from './RecipesList'

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

export const FakeWeekProvider = ({ children }) => {  
    const [week, setWeek] = useState([{
        monday: '',
        tuesday: '',
        wednesday: 'MOqgTKsRp9OwepdSupbr',
        thursday: '',
        friday: '',
        saturday: '',
        sunday: ''
    }])

    return (
        <WeekContext.Provider value={[week, setWeek]}>
            {children}
        </WeekContext.Provider>
    )
}

export const FakeSelectedDayProvider = ({ children }) => {
    const [selectedDay, setSelectedDay] = useState('monday')

    return (
        <SelectedDayContext.Provider value={[selectedDay, setSelectedDay]}>
            {children}
        </SelectedDayContext.Provider>
    )

}

it ('renders component correctly', () => {
    const dream = renderer
    .create(
        <HashRouter>
            <FakeRecipeProvider>
                <FakeWeekProvider>
                    <FakeSelectedDayProvider>
                        <WeekList>
                            <RecipeCard/>
                        </WeekList>
                    </FakeSelectedDayProvider>
                </FakeWeekProvider>
            </FakeRecipeProvider>
        </HashRouter>
    )
    .toJSON()
expect(dream).toMatchSnapshot()
})