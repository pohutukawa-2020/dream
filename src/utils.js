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

export function addRecipe (Recipe) {
  firebase
    .firestore()
    .collection('recipes')
    .add(Recipe)
    .then(() => {
      console.log("Recipe successfully added!")
      }).catch((error) => {
          console.error("Error adding recipe: ", error)
      })
}
export function UpdateRecipe (recipe) {
  firebase
    .firestore()
    .collection('recipes')
    .update({ recipe
    })
    .then(() => {
      console.log("Recipe successfully added!")
      }).catch((error) => {
          console.error("Error adding recipe: ", error)
      })
}


export function updateRecipe (Recipe) {
  firebase
    .firestore()
    .collection('recipes')
    .update(Recipe)
    .then(() => {
      console.log("Recipe successfully updated!")
      }).catch((error) => {
          console.error("Error updating recipe: ", error)
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

export function sortRecipes (recipes, sortBy) {
  const sortedRecipes = recipes.sort((a, b) => {
    const nameA = a.name.toUpperCase()
    const nameB = b.name.toUpperCase()
    switch (sortBy) {
      case 'NAME_ASC':
        if (nameA < nameB) {
          return -1
        }
        if (nameA > nameB) {
          return 1
        } 
        return 0
      case 'NAME_DESC':
        if (nameA > nameB) {
          return -1
        }
        if (nameA < nameB) {
          return 1
        } 
        return 0
      default:
        break
    } 
  })

  return sortedRecipes
}
