import React, { useContext, useState } from 'react'

import { RecipeContext } from './context/RecipeContext'
import RecipeCard from './RecipeCard'
import Seed from './Seed'

import { sortRecipes } from '../utils.js'

function RecipesList () {
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
