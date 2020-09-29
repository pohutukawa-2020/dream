import React, { useState, useContext } from 'react'
import firebase from 'firebase/app'
import { RecipeContext } from './RecipeContext'

function EditRecipe (props) {
  const [recipes] = useContext(RecipeContext)
  const recipeId = props.match.params.id
  const recipe = recipes.find(x => x.id === recipeId)

  const [imagePath, setImagePath] = useState(recipe ? recipe.imagePath : null)
  const [name, setName] = useState(recipe ? recipe.name : null)
  const [serves, setServes] = useState(recipe ? recipe.serves : null)
  const [prepTime, setPrepTime] = useState(recipe ? recipe.prepTime : null)
  const [ingredients, setIngredients] = useState(recipe ? recipe.ingredients : null)
  const [method, setMethod] = useState(recipe ? recipe.method : null)

  function onSubmitHandler (e) {
    e.preventDefault()

    firebase
      .firestore()
      .collection('recipes')
      .doc(recipe.id)
      .update({
        imagePath,
        name,
        serves,
        prepTime,
        ingredients: ingredients,
        method: method
      })
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
    <>
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
    </>
  )
}

export default EditRecipe
