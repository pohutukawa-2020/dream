import React from 'react'

import firebase from 'firebase/app'

import seedRecipes from '../data/seedData'

export default function Seed () {
  function seedClickHandler () {
    firebase
      .firestore()
      .collection('recipes')
      .add(seedRecipes[0])
      .then(() => {
        console.log("Recipe successfully added!")
        }).catch((error) => {
            console.error("Error adding recipe: ", error)
        })

    firebase
      .firestore()
      .collection('recipes')
      .add(seedRecipes[1])
      .then(() => {
        console.log("Recipe successfully added!")
        }).catch((error) => {
            console.error("Error adding recipe: ", error)
        })

      firebase
        .firestore()
        .collection('recipes')
        .add(seedRecipes[2])
        .then(() => {
          console.log("Recipe successfully added!")
          }).catch((error) => {
              console.error("Error adding recipe: ", error)
          })
          firebase
        .firestore()
        .collection('recipes')
        .add(seedRecipes[3])
        .then(() => {
          console.log("Recipe successfully added!")
          }).catch((error) => {
              console.error("Error adding recipe: ", error)
          })
    
  }

  function deleteClickHandler () {
    firebase
      .firestore()
      .collection('recipes')
      .get()
      .then(response => {
        response.forEach(recipe => {
          recipe.ref.delete()
          console.log("Recipe successfully deleted!")
        })
      })
  }

  return (
    <div>
      <button onClick={deleteClickHandler}>DELETE ALL RECIPES</button>
      <button onClick={seedClickHandler}>SEED RECIPES</button>
    </div>
  )
  }
