import firebase from 'firebase/app'

export function addRecipe (recipe) { // USING THIS ONE
  firebase
    .firestore()
    .collection('recipes')
    .add(recipe)
    .then(firestoreRef => {
      console.log('Recipe successfully added!', firestoreRef)
    }).catch((error) => {
      console.error('Error adding recipe: ', error)
    })
}

export const deleteRecipe = (recipeId, props) => { // USING THIS ONE
  firebase
    .firestore()
    .collection('recipes')
    .doc(recipeId)
    .delete()
    .then(() => {
      console.log('Recipe successfully deleted!')
    }).catch((error) => {
      console.error('Error deleting recipe: ', error)
    })
  props.history.push('/recipes')
}

// export function UpdateRecipe (recipe) {
//   firebase
//     .firestore()
//     .collection('recipes')
//     .update({ recipe })
//     .then(() => {
//       console.log('Recipe successfully added!')
//     }).catch((error) => {
//       console.error('Error adding recipe: ', error)
//     })
// }



// export function updateRecipe (updatedRecipe, recipeId) {
//   firebase
//     .firestore()
//     .collection('recipes')
//     .doc(recipeId)
//     .update(updatedRecipe)
//     .then(() => {
//       console.log('Recipe successfully updated!')
//     }).catch((error) => {
//       console.error('Error updating recipe: ', error)
//     })
// }

// export function addIngredients(recipeId, recipeIngredients) {
//   firebase
//     .firestore()
//     .collection('shoppingList')
//     .add({
//       recipeId: recipeId,
//       day: null,
//       ingredients: recipeIngredients
//     })
//     .then((firestoreRef) => {
//       console.log("Ingredients successfully added to shopping list!", firestoreRef.id)
//       return firestoreRef.id
//       }).catch((error) => {
//           console.error("Error adding ingredients: ", error)
//       })
// }
export function assignRecipeToWeekDay (userId, newWeekDayAssignment) { // USING THIS ONE
  firebase
    .firestore()
    .collection('week')
    .doc(userId)
    .update(newWeekDayAssignment)
    .then(firestoreRef => {
      console.log('Recipe successfully assigned!', newWeekDayAssignment)
    }).catch((error) => {
      console.error('Error assigning recipe: ', error)
    })
}

// export const deleteCardRecipe = (recipe) => { 
//   firebase
//     .firestore()
//     .collection('recipes')
//     .doc(recipe.id)
//     .delete()
//     .then(() => {
//       console.log('Recipe successfully deleted!')
//     }).catch((error) => {
//       console.error('Error deleting recipe: ', error)
//     })
// }

export function clearWeekDayAssignments (userId) { // USING THIS ONE
  firebase
    .firestore()
    .collection('week')
    .doc(userId)
    .update({
      monday: '',
      tuesday: '',
      wednesday: '',
      thursday: '',
      friday: '',
      saturday: '',
      sunday: ''
    })
    .then(() => {
      console.log('Week assignments cleared')
    }).catch((error) => {
      console.error('Error clearing week assignments : ', error)
    })
}

export function addRecipeIngredients(userId, recipe, recipeId) { // USING THIS ONE
  const newIngredients = recipe.ingredients
  newIngredients.map(newIngredient => {
    console.log(newIngredient)
    firebase
      .firestore()
      .collection('shoppingList')
      .add({
        userId: userId,
        recipeId: recipeId,
        name: newIngredient.name,
        quantity: newIngredient.quantity
      })
      .then(id => {
        console.log('Ingredients successfully added!', id.id)
      }).catch((error) => {
        console.error('Error adding ingredients: ', error)
      })
  })
 
}

export function removeRecipeIngredients (recipeId) { // USING THIS ONE
  firebase
    .firestore()
    .collection('shoppingList')
    .where('recipeId', '==', recipeId)
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        doc.ref.delete()
      })
    })
    .catch(function (error) {
      console.log('Error deleting ingredients: ', error)
    })
}
export const deleteSingleIngredient = (id) => { // USING THIS ONE
  firebase
    .firestore()
    .collection('shoppingList')
    .doc(id)
    .delete()
    .then(() => {
      console.log('ingredient successfully deleted!')
    }).catch((error) => {
      console.error('Error deleting recipe: ', error)
    })
}

export function clearShoppingList (userId) { // USING THIS ONE
  firebase
    .firestore()
    .collection('shoppingList')
    .where('userId', '==', userId)
    .get()
    .then(response => {
      response.forEach(shoppingListEntry => {
        shoppingListEntry.ref.delete()
        console.log('Shopping list successfully cleared!')
      })
    })
}

export function clearMiscShoppingList (userId) {
  firebase
    .firestore()
    .collection('miscShoppingList')
    .where('userId', '==', userId)
    .get()
    .then(response => {
      response.forEach(shoppingListEntry => {
        shoppingListEntry.ref.delete()
        console.log('Shopping list successfully cleared!')
      })
    })
}

export function addMiscItem (userId, newItemQ, newItem) { // USING THIS ONE
  firebase
    .firestore()
    .collection('shoppingList')
    .add({
      userId: userId,
      name: newItem,
      quantity: newItemQ
    })
    .then((firestoreRef) => {
      console.log('Misc item successfully added to shopping list!', firestoreRef.id)
      return firestoreRef.id
    }).catch((error) => {
      console.error('Error adding item: ', error)
    })
}

export function sortList (list, sortBy) { // USING THIS ONE
  // eslint-disable-next-line
  const sortedList = list.sort((a, b) => {
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

  return sortedList
}

export function capitalise (s) { // USING THIS ONE
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

// AUTHENTICATION UTILS USING ALL

export const signUp = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(response => {
      console.log('successful sign up: ', response.user.uid)
      firebase.firestore().collection('week').doc(response.user.uid)
      .set({
        monday: '',
        tuesday: '',
        wednesday: '',
        thursday: '',
        friday: '',
        saturday: '',
        sunday: '',
        userId: response.user.uid
      })
    })
    .catch(error => {
    console.log('unsuccessful sign up: ', error.message + ' ' + error.code)
    return(error.code)
  })
}

export const signIn = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('successfully signed in!')
    })
    .catch(error => {
      console.log('unsuccessful sign in: ', error.message + ' ' + error.code)
    })
}

export const signInGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  firebase.auth().signInWithPopup(provider)
  .then((result) => {
    const user = result.user
    console.log('successfully signed in with Facebook!')
    firebase.firestore().collection('week').doc(user.uid).get()
    .then(doc => {
      if (doc.exists) {
        console.log('week table already exists')
      } else {
        console.log('week table doesn\'t exist, creating one')
        firebase.firestore().collection('week').doc(user.uid)
        .set({
          monday: '',
          tuesday: '',
          wednesday: '',
          thursday: '',
          friday: '',
          saturday: '',
          sunday: '',
          userId: user.uid
        })
      }
    })
  })
  .catch(error => {
    console.log('unsuccessful sign in: ', error.message + ' ' + error.code)
  })
}

export const signInFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider()
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      const user = result.user
      console.log('successfully signed in with Facebook!')
      firebase.firestore().collection('week').doc(user.uid).get()
      .then(doc => {
        if (doc.exists) {
          console.log('week table already exists')
        } else {
          console.log('week table doesn\'t exist, creating one')
          firebase.firestore().collection('week').doc(user.uid)
          .set({
            monday: '',
            tuesday: '',
            wednesday: '',
            thursday: '',
            friday: '',
            saturday: '',
            sunday: '',
            userId: user.uid
          })
        }
      })
    })
    .catch(error => {
      console.log('unsuccessful sign in: ', error.message + ' ' + error.code)
    })
}

export const signOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log('successfully signed out!')
    }).catch(error => {
      console.error('error signing out: ', error)
    })
}