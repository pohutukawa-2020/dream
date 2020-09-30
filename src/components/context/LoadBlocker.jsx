import React, { useContext} from 'react'

import { RecipeContext } from './RecipeContext'
import { SelectedDayContext } from './SelectedDayContext'
import { ShoppingListContext } from './ShoppingListContext'
import { StrikeOut } from './StrikeoutContext'
import { UserContext } from './UserContext'
import { WeekContext } from './WeekContext'
import LoadingSpinner from './LoadingSpinner'


export default function LoaderBlocker ({ children }) {
  const {user} = useContext(UserContext)
  const [recipes] = useContext(RecipeContext)
  const [selectedDay] = useContext(SelectedDayContext)
  const [shoppingList] = useContext(ShoppingListContext)
  const [week] = useContext(WeekContext)
  // const [strikeOut] = useContext(StrikeOut)

  if (!user || !recipes || !selectedDay || !shoppingList || !week) {
    return <LoadingSpinner />
  } 
    return children
}