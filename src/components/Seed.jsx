import React, { useContext } from 'react'

import firebase from 'firebase/app'

import seedRecipes from '../data/seedData'

import { UserContext } from './context/UserContext'

export default function Seed () {
  const {user} = useContext(UserContext)

  function seedClickHandler () {
    seedRecipes.map(recipe => {
      firebase
      .firestore()
      .collection('recipes')
      .add({
        userId: user.uid,
        ...recipe
      })
      .then(() => {
        console.log('Recipe successfully added!')
      }).catch((error) => {
        console.error('Error adding recipe: ', error)
      })
    })
  }

  function deleteClickHandler () {
    firebase
      .firestore()
      .collection('recipes')
      .where('userId', '==', user.uid)
      .get()
      .then(response => {
        response.forEach(recipe => {
          recipe.ref.delete()
          console.log('Recipe successfully deleted!')
        })
      })
  }

  return (
    <div className="pad">
      <button className="button is-small is-rounded is-outline is-centered" onClick={deleteClickHandler}>DELETE ALL RECIPES</button>
      <button className="button is-small is-rounded is-outline is-centered" onClick={seedClickHandler}>SEED RECIPES</button>
    </div>
  )
}
