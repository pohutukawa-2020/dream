import firebase from 'firebase/app'

export function deleteRecipe (recipe) {
  firebase
  .firestore()
  .collection('recipes')
  .doc(recipe.id)
  .delete()
  .then(function() {
    console.log("Document successfully deleted!")
    }).catch(function(error) {
        console.error("Error removing document: ", error)
    })
}
