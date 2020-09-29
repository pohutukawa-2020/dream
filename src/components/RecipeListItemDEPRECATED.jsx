import React, { useState } from 'react'

import firebase from 'firebase/app'

import { deleteRecipe } from '../utils'

import EditRecipe from './EditRecipe'

function RecipeListItem ({ recipe }) {
  const [showEdit, setShowEdit] = useState(false)
  const [ingredientsAdded, setIngredientsAdded] = useState(false)
  const [ingredientRef, setIngredientRef] = useState('')

  function addIngredients () {
    firebase
      .firestore()
      .collection('shoppingList')
      .add({
        recipeId: recipe.id,
        day: null,
        ingredients: recipe.ingredients
      })
      .then((firestoreRef) => {
        console.log('Ingredients successfully added to shopping list!', firestoreRef.id)
        setIngredientRef(firestoreRef.id)
      }).catch((error) => {
        console.error('Error adding ingredients: ', error)
      })
  }

  function removeIngredients (ingredientRef) {
    firebase
      .firestore()
      .collection('shoppingList')
      .doc(ingredientRef)
      .delete()
      .then(() => {
        console.log('Ingredients successfully added to shopping list!')
      }).catch((error) => {
        console.error('Error adding ingredients: ', error)
      })
  }

  return (
    <div className='recipeEntry'>
      <h4>RecipeListItem</h4>
      <span>Name: {recipe.name}</span>
      <span>Serves: {recipe.serves}</span>
      <span>Prep Time: {recipe.prepTime}</span>
        Ingredients: <ul>
        {recipe.ingredients.map(ingredient =>
          <li key={ingredient}>
            {ingredient}
          </li>
        )}
      </ul>
        Method: <ol>
        {recipe.method.map(step =>
          <li key={step}>
            {step}
          </li>
        )}
      </ol>
      {showEdit ? <button onClick={() => setShowEdit(false)}>Cancel Edit</button> : <button onClick={() => setShowEdit(true)}>Edit Recipe</button>}
      {showEdit ? <EditRecipe recipe={recipe}/> : null}
      {ingredientsAdded
        ? <button onClick={e => {
          e.preventDefault()
          removeIngredients(ingredientRef)
          setIngredientsAdded(false)
        }}>Remove ingredients from shopping list</button>
        : <button onClick={e => {
          e.preventDefault()
          addIngredients()
          setIngredientsAdded(true)
        }}>Add ingredients to shopping list</button>}
      <button onClick={e => {
        e.preventDefault()
        deleteRecipe(recipe)
      }}>Remove Recipe</button>
    </div>
  )
}

export default RecipeListItem
