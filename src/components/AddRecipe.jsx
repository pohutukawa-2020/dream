import React, { useState, useContext } from 'react'

import { UserContext } from './UserContext'

import { addRecipe } from '../utils'

// import MultipleIngredientTest from './MultipleIngredientTest'

const AddRecipe = (props) => {
  const {user} = useContext(UserContext)
  const [name, setName] = useState('')
  const [imagePath, setImagePath] = useState('')
  const [serves, setServes] = useState('')
  const [prepTime, setPrepTime] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [method, setMethod] = useState([])
  // const [newIngredient, setNewIngredient] = useState('')

  function onSubmitHandler (e) {
    e.preventDefault()

    const newRecipe = {
      name,
      imagePath,
      serves,
      prepTime,
      ingredients,
      method,
      user: user.uid
    }

    addRecipe(newRecipe)
    setName('')
    setImagePath('')
    setServes('')
    setPrepTime('')
    setIngredients([])
    setMethod([])

    props.history.push('/recipes')
  }

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <h4>Add Recipe</h4>

        <div className="card">
          <div className="card-image">
            <figure className="image is-2by1">
              <img src="https://icon-library.com/images/photo-placeholder-icon/photo-placeholder-icon-6.jpg" alt="add your meal" />
              <button className="button is-link is-small is-rounded">
                <i className="fas fa-plus"></i>
              </button>
            </figure>
          </div>
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
              <input type='number' value={serves} onChange={e => setServes(e.currentTarget.value)} /> {/* --- SERVES --- */}
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
              <ul>{ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}</ul>
            </div>
          </div>
          <div className="card-content">
            <div>
              <label>{'Method (seperate by comma)'}</label>
              <textarea className="textarea is-primary" type='text' value={method} onChange={e => setMethod(e.currentTarget.value.split(','))} />
              <ol>{method.map(step => <li key={step}>{step}</li>)}</ol>
            </div>
            <br></br>
            <button className="button card-content is-medium is-rounded is-primary">Add Recipe</button>
          </div>
        </div>
        <br></br>
      </form>
    </>
  )
}

export default AddRecipe
