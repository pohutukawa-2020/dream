import firebase from 'firebase/app'

export function deleteRecipe (recipe) {
  firebase
    .firestore()
    .collection('recipes')
    .doc(recipe.id)
    .delete()
    .then(() => {
      console.log("Recipe successfully deleted!")
      }).catch((error) => {
          console.error("Error deleting recipe: ", error)
      })
}

export function addRecipe (newRecipe) {
  firebase
    .firestore()
    .collection('recipes')
    .add(newRecipe)
    .then(() => {
      console.log("Recipe successfully added!")
      }).catch((error) => {
          console.error("Error adding recipe: ", error)
      })
}

    // firebase
    //   .firestore()
    //   .collection('recipes')
    //   .add(newRecipe)
    //   .then(() => {
    //     console.log("Recipe successfully added!")
    //     }).catch((error) => {
    //         console.error("Error adding recipe: ", error)
    //     })
    //   .then(() => {
    //     setName('')
    //     setImgPath('')
    //     setServes('')
    //     setPrepTime('')
    //     setIngredients([])
    //     setMethod([])
    //   })

export function addIngredients(recipeId, recipeIngredients) {
  firebase
    .firestore()
    .collection('shoppingList')
    .add({
      recipeId: recipeId,
      day: null,
      ingredients: recipeIngredients
    })
    .then((firestoreRef) => {
      console.log("Ingredients successfully added to shopping list!", firestoreRef.id)
      return firestoreRef.id
      }).catch((error) => {
          console.error("Error adding ingredients: ", error)
      })
}
