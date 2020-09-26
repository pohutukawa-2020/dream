import React, { useState, useEffect, useContext } from 'react'

import firebase from 'firebase'

import { RecipeContext } from './RecipeContext'
import RecipeCard from './RecipeCard'
import Seed from './Seed'


function RecipesList() {
  const [recipes] = useContext(RecipeContext)
  
  return (
    <div className="RecipesList">
      <h2>RecipesList</h2>
      <Seed /> {/* --- TO BE DELETED FROM PRODUCTION --- */}
      <div className='recipeSort'>
        <label>Sort By:</label>{' '}
        <select>
          <option>Name (A-Z)</option>
          <option>Name (Z-A)</option>
        </select>
      </div>
      <ul>
        {recipes.map(recipe => 
          <li key={recipe.id}>
            <RecipeCard recipe={recipe} />
          </li>
        )}
      </ul>
    </div>
  )
}

export default RecipesList