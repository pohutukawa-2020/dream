import React, { useState } from 'react'

import firebase from 'firebase/app'

import { addRecipe } from '../utils'

// import MultipleIngredientTest from './MultipleIngredientTest'

const AddRecipe = () => {
  const [name, setName] = useState('')
  const [imgPath, setImgPath] = useState('')
  const [serves, setServes] = useState('')
  const [prepTime, setPrepTime] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [method, setMethod] = useState([])
  const [newIngredient, setNewIngredient] = useState('')

  function onSubmitHandler(e) {
    e.preventDefault()

    const newRecipe = {
      name,
      imgPath,
      serves,
      prepTime,
      ingredients,
      method
    }

    addRecipe(newRecipe)
    setName('')
    setImgPath('')
    setServes('')
    setPrepTime('')
    setIngredients([])
    setMethod([])
  }

  return (
    <>
    <form onSubmit={onSubmitHandler}>
      <h4>Add Recipe</h4>
      <div>
        <label>Title</label>
        <input type='text' value={name} onChange={e => setName(e.currentTarget.value)} />
      </div>
      <div>
        <label>Image URL</label>
        <input type='text' value={imgPath} onChange={e => setImgPath(e.currentTarget.value)} />
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
      <button>Add Recipe</button>
    </form>

    {/* <MultipleIngredientTest /> */}
    </>
  )
}

export default AddRecipe;
