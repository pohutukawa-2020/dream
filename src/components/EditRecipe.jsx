import React, { useState, useContext, useEffect } from 'react'
import firebase from 'firebase/app'

import { RecipeContext } from './context/RecipeContext'
import { updateRecipe } from '../utils'

function EditRecipe (props) {
  const [recipes] = useContext(RecipeContext)
  const recipeId = props.match.params.id
  const recipe = recipes.find(x => x.id === recipeId)

  const [imagePath, setImagePath] = useState(null)
  const [name, setName] = useState(null)
  const [serves, setServes] = useState(null)
  const [prepTime, setPrepTime] = useState(null)
  const [ingredients, setIngredients] = useState(null)
  const [method, setMethod] = useState(null)

  useEffect(() => {
    setImagePath(recipe ? recipe.imagePath : null)
    setName(recipe ? recipe.name : null)
    setServes(recipe ? recipe.serves : null)
    setPrepTime(recipe ? recipe.prepTime : null)
    setIngredients(recipe ? recipe.ingredients : null)
    setMethod(recipe ? recipe.method : null)
  }, [recipe])

  function onSubmitHandler (e) {
    e.preventDefault()
    const updatedRecipe = {
      imagePath,
      name,
      serves,
      prepTime,
      ingredients: ingredients,
      method: method
    }

    firebase
      .firestore()
      .collection('recipes')
      .doc(recipe.id)
      .update(updatedRecipe)
      .then(() => {
        setImagePath('')
        setName('')
        setServes('')
        setPrepTime('')
        setIngredients([])
        setMethod([])
      })
    props.history.push(`/recipe/${recipeId}`)
  }


  return (
    recipe && <>
      <form onSubmit={onSubmitHandler}>
        <h4>Edit Recipe</h4>

        <div className="card">
          <div className="card-image">
            <figure className="image is-2by1">
              <img src={imagePath} alt="add your meal" />
            </figure>
          </div>
          <span><button className="button is-link is-small is-rounded">
            <i className="fas fa-arrow-circle-left"></i>
          </button></span>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-5">
                  <div>
                    <label>Title</label>
                    <input className="label is-primary" type='text' value={name} onChange={e => setName(e.currentTarget.value)} /> {/* --- NAME OF RECIPE --- */}
                  </div>
                </p>
              </div>
            </div>
          </div>
          <div>
            <label>Image URL</label>
            <input type='text' value={imagePath} onChange={e => setImagePath(e.currentTarget.value)} />
          </div>
          <div className="content">
            <div className="card-content">
              Serves<br></br>
              <input value={serves} onChange={e => setServes(e.currentTarget.value)} /> {/* --- SERVES --- */}
            </div>
            <div className="card-content">
              Prep Time<br></br>
              <input type='text' value={prepTime} onChange={e => setPrepTime(e.currentTarget.value)} /> {/* --- PREP TIME --- */}
            </div>
          </div>
          <div className="card-content">
                Ingredients needed:
                (seperate by comma)
            <div>
              <textarea className="textarea is-primary" type='text' value={ingredients} onChange={e => setIngredients(e.currentTarget.value.split(','))} /> {/* <MultipleIngredientTest /> */}
              <ul>{ingredients ? ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>) : null}</ul>
            </div>
          </div>
          <div className="card-content">
            <div>
              <label>{'Method (seperate by comma)'}</label>
              <textarea className="textarea is-primary" type='text' value={method} onChange={e => setMethod(e.currentTarget.value.split(','))} />
              <ol>{method ? method.map(step => <li key={step}>{step}</li>) : null}</ol>
            </div>
            <br></br>
            <button className="button card-content is-medium is-rounded is-primary">Edit Recipe</button>
          </div>
        </div>
        <br></br>
      </form>
    </> || <div>is loading</div>
  )
}

export default EditRecipe
