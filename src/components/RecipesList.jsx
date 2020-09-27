import React, { useContext, useState } from 'react'

import { RecipeContext } from './RecipeContext'
import RecipeCard from './RecipeCard'
import Seed from './Seed'

function sortRecipes (recipes, sortBy) {
  const sortedRecipes = recipes.sort((a, b) => {
    const nameA = a.name.toUpperCase()
    const nameB = b.name.toUpperCase()
    switch (sortBy) {
      case 'NAME_ASC':
        if (nameA < nameB) {
          return -1
        }
        if (nameA > nameB) {
          return 1
        } 
        return 0
      case 'NAME_DESC':
        if (nameA > nameB) {
          return -1
        }
        if (nameA < nameB) {
          return 1
        } 
        return 0
      default:
        break
    } 
  })
  
  return sortedRecipes
}


function RecipesList() {
  const [recipes] = useContext(RecipeContext)
  const [sortBy, setSortBy] = useState('NAME_ASC')
  const sortedRecipes = sortRecipes([...recipes], sortBy)
  
  return (
    <>
    <div className="RecipesList">
      <Seed /> {/* --- TO BE DELETED FROM PRODUCTION --- */}
      <div className='recipeSort'>
        <label>Sort By:</label>{' '}
        <select value={sortBy} onChange={evt => setSortBy(evt.target.value)}>
          <option value='NAME_ASC'>Name (A-Z)</option>
          <option value='NAME_DESC'>Name (Z-A)</option>
        </select>
      </div>
      <ul>
        {sortedRecipes.map(recipe => 
          <li key={recipe.id}>
            <RecipeCard recipe={recipe} />
          </li>
        )}
      </ul>
    </div>
    </>
  )
}

export default RecipesList