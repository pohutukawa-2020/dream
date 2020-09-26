import React, { useState, useContext } from 'react'

import { RecipeContext } from './RecipeContext'

import firebase from 'firebase/app'

function EditRecipe ({props}) {
  const [recipes] = useContext(RecipeContext)
  const recipeId = props.match.params.id
  const recipe = recipes.find(x => x.id === recipeId)

  const [name, setName] = useState('recipe.name')
  const [serves, setServes] = useState('recipe.serves')
  const [prepTime, setPrepTime] = useState('recipe.prepTime')
  const [ingredients, setIngredients] = useState(['recipe.ingredients'])
  const [method, setMethod] = useState(['recipe.method'])
  // const [newIngredient, setNewIngredient] = useState('')

  function onSubmitHandler(e) {
    e.preventDefault()

    firebase
      .firestore()
      .collection('recipes')
      .doc(recipe.id)
      .update({
        name,
        serves,
        prepTime,
        ingredients: ingredients,
        method: method
      })
      .then(() => {
        setName('')
        setServes('')
        setPrepTime('')
        setIngredients([])
        setMethod([])
      })
    }

  return (
    <>
    <form onSubmit={onSubmitHandler}>
      <h4>Edit Recipe</h4>
      <div>
        <label>Title</label>
        <input type='text' value={name} onChange={e => setName(e.currentTarget.value)} />
      </div>
      <div>
        <label>Serves</label>
        <input type='number' value={serves} onChange={e => setServes(e.currentTarget.value)} />
      </div>
      <div>
        <label>Prep Time</label>
        <input type='text' value={prepTime} onChange={e => setPrepTime(e.currentTarget.value)} />
      </div>
      <div>
        <label>{`Ingredients (seperate by comma)`}</label>
        <input type='text' value={ingredients} onChange={e => setIngredients(e.currentTarget.value.split(','))} />
        <ul>{ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}</ul>
      </div>
      <div>
        <label>{`Method (seperate by comma)`}</label>
        <input type='text' value={method} onChange={e => setMethod(e.currentTarget.value.split(','))} />
        <ol>{method.map(step => <li key={step}>{step}</li>)}</ol>
      </div>
      <button>Edit Recipe</button>
    </form>

    {/* <MultipleIngredientTest /> */}
    </>
  )
}

export default EditRecipe