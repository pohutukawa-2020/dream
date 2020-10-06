import React, { useState, useContext, useEffect } from 'react'
import firebase from 'firebase/app'

import { RecipeContext } from './context/RecipeContext'
import { updateRecipe, signOut } from '../utils'

export default function EditRecipe (props) {
  const [recipes] = useContext(RecipeContext)
  const recipeId = props.match.params.id
  const recipe = recipes.find(x => x.id === recipeId)

  const [imagePath, setImagePath] = useState(null)
  const [name, setName] = useState(null)
  const [serves, setServes] = useState(null)
  const [prepTime, setPrepTime] = useState(null)
  const [ingredients, setIngredients] = useState(null)
  const [method, setMethod] = useState(null)
  // const listedIngredients = ingredients ? ingredients.map(ingredient => {ingredient.quantity}{' '}{ingredient.name}</>) : null

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

  const clickHandler = () => {
    signOut()
    props.history.push('/')
  }

  // EDIT INGREDIENTS 

  const handleInputChange = (evt, idx) => {
    const { name, value } = evt.target
    const list = [...ingredients]
    list[idx][name] = value
    setIngredients(list)
  }

    // handle click event of the Remove button
    const handleRemoveClick = idx => {
      const list = [...ingredients]
      list.splice(idx, 1)
      setIngredients(list)
    }
  
    // handle click event of the Add button
    const handleAddClick = () => {
      setIngredients([...ingredients, { quantity: null, quantityType: 't', name: '' }])
    }

  return (
    <>
      <div className='noBulmaNav'>
        <img className="noBulmaNavLogo" src="../rp.png" alt="Logo"/>
        <div className='noBulmaNavTitle'>Edit Recipe</div>
        <h1 className="noBulmaNavSignOut" onClick={() => clickHandler()}>Sign Out</h1>
      </div>
      <form onSubmit={onSubmitHandler}>
        {/* <h4>Edit Recipe</h4> */}

        <div>
        <div className="card card-expanded-edit">
          <div className="card-image">
            <figure className="image is-2by1">
              <img src={imagePath} alt="add your meal" />
            </figure>
          </div>
          <div className="return-edit">
          <span><button className="button is-small is-rounded is-primary">
            <i className="fas fa-arrow-circle-left"></i>
          </button></span>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                </figure>
              </div>
              <div className="media-content">
                <p className="subtitle is-5">
                  <div className="edit-title">
                    <label>Title</label>
                    <input className="label is-primary" type='text' value={name} onChange={e => setName(e.currentTarget.value)} /> {/* --- NAME OF RECIPE --- */}
                  </div>
                </p>
              </div>
            </div>
          </div>
          <div className="edit-image">
            <label>Image URL</label><br></br>
            <input type='text' value={imagePath} onChange={e => setImagePath(e.currentTarget.value)} />
          </div>
          <div className="content">
            <div className="card-content">
              Serves<br></br>
              <input value={serves} onChange={e => setServes(e.currentTarget.value)} /> {/* --- SERVES --- */}
            </div>
            <div className="card-content">
              Prep Time (minutes)<br></br>
              <input type='text' value={prepTime} onChange={e => setPrepTime(e.currentTarget.value)} /> {/* --- PREP TIME --- */}
            </div>
          </div>
          {/* <div className="card-content">
                Ingredients needed:
                (seperate by comma)
            <div>
              <textarea className="textarea is-primary" type='text' value={ingredients ? ingredients.map(ingredient => <p key={ingredient.name}>{ingredient.quantity}{' '}{ingredient.name}</p>) : null} onChange={e => setIngredients(e.currentTarget.value.split(','))} /> 
              <ul>{ingredients ? ingredients.map(ingredient => <li key={ingredient.id}>{ingredient.quantity}{' '}{ingredient.name}</li>) : null}</ul>
            </div>
          </div> */}
          <div className='card-content'>
            Ingredients needed:
            <div>
              {ingredients ? ingredients.map((ingredient, idx) => (
                <div>
                  <div className="newIngredientField">
                    <input 
                      className="newIngredientQuantityField"
                      name='quantity'
                      type='number'
                      size="4"
                      maxlength='4'
                      placeholder='Quantity'
                      value={ingredient.quantity}
                      onChange={evt => handleInputChange(evt, idx)}
                    />
                    <select className="newIngredientQuantityTypeField" name='quantityType' value={ingredient.quantityType} onChange={evt => handleInputChange(evt, idx)}>
                      <option value='t'>t</option>
                      <option value='T'>T</option>
                      <option value='mL'>mL</option>
                      <option value='L'>L</option>
                      <option value='g'>g</option>
                      <option value='kg'>kg</option>
                      <option value='can'>can</option>
                      <option value='can'>cup</option>
                      <option value=''></option>
                    </select>
                    <input
                      className="newIngredientNameField"
                      name="name"
                      placeholder="Enter Ingredient"
                      value={ingredient.name}
                      onChange={evt => handleInputChange(evt, idx)}
                    />
                    <div className='newIngredientX'>
                      {ingredients.length !== 1 && <h1 onClick={() => handleRemoveClick(idx)}>X</h1>}
                    </div>
                  </div>
                  <div className='newIngredientPlus'>
                    {ingredients.length - 1 === idx && <button onClick={handleAddClick}>Add another ingredient</button>}
                  </div>
                </div>
              ) 
              
              ): null}
            </div>
          </div>
          
          <div className="">
            <div className="textmeth">
              <label>{'Method (seperate by comma)'}</label>
              <div className="editcard">
              <textarea className="textarea is-primary" type='text' value={method} onChange={e => setMethod(e.currentTarget.value.split(','))} />
              </div>
              <div className="methpad-edit">
              <ol>{method ? method.map(step => <li key={step}>{step}<br /><br /></li>) : null}
              </ol>
              </div>
            </div>
            <br></br>
            <div className="edit-button">
            <button className="button card-content is-small is-rounded is-primary edit-button">Edit Recipe</button>
            </div>
            </div>
          </div>
        </div>
        <br></br>
      </form>
    </>
  )
}

