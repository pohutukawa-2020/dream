import React, { useState, useEffect } from 'react'

import firebase from 'firebase'

import RecipeCard from './RecipeCard'
import Seed from './Seed'

function useRecipes() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    firebase
      .firestore()
      .collection('recipes')
      .onSnapshot(snapshot => {
        const newRecipes = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setRecipes(newRecipes)
      })
  },[])

  return recipes
}

function RecipesList() {
  const recipes = useRecipes()

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