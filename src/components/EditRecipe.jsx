// import React, { useState, useContext } from 'react'

// import { RecipeContext } from './RecipeContext'

// import firebase from 'firebase/app'

// function EditRecipe ({props}) {
//   const [recipes] = useContext(RecipeContext)
//   const recipeId = props.match.params.id
//   const recipe = recipes.find(x => x.id === recipeId)

//   const [name, setName] = useState('recipe.name')
//   const [serves, setServes] = useState('recipe.serves')
//   const [prepTime, setPrepTime] = useState('recipe.prepTime')
//   const [ingredients, setIngredients] = useState(['recipe.ingredients'])
//   const [method, setMethod] = useState(['recipe.method'])
//   // const [newIngredient, setNewIngredient] = useState('')

//   function onSubmitHandler(e) {
//     e.preventDefault()

//     firebase
//       .firestore()
//       .collection('recipes')
//       .doc(recipe.id)
//       .update({
//         name,
//         serves,
//         prepTime,
//         ingredients: ingredients,
//         method: method
//       })
//       .then(() => {
//         setName('')
//         setServes('')
//         setPrepTime('')
//         setIngredients([])
//         setMethod([])
//       })
//     }

//   return (
//     <>
//       <div className="card">
//           <div className="card-image">
//             <figure className="image is-2by1">
//               <img src={recipe.imagePath} alt={recipe.name}/>
//               </figure>
//           </div>
          
//           <div className="card-content">
//             <div className="media">
//               <div className="media-left">
//                 <figure className="image is-48x48">
//                 </figure>
//               </div>
//               <div className="media-content">
//                 <p className="title is-5">{recipe.name}</p> {/* --- NAME OF RECIPE --- */}
//               </div>
//           </div>
//               <div className="content">
//                 Serves: {recipe.serves} <br/> {/* --- SERVES --- */}
//                 Prep time: {recipe.prepTime} {/* --- PREP TIME --- */}
//               </div>
//               <div className="ingredients">
//                 Ingredients needed:<br/><br/>
//                 {recipe.ingredients && recipe.ingredients.map(ingredient => (
//                   <p>{ingredient}</p>
//                 ))}
//               </div>
//               <div className="Method">
//               <br/>Method:<br/><br/>
//                 {recipe.method && recipe.method.map(step => (
//                   <p>{step}</p>
//                 ))}
//               </div>
//           </div>
          
//       </div>
//     </>
//   )
// }
// function EditRecipe ({props}) {
  
//   const recipeId = props.match.params.id
//   const [recipes] = useContext(RecipeContext)
  
//   const recipe = recipes.find(x => x.id === recipeId)

//   const [name, setName] = useState('')
//   const [serves, setServes] = useState('')
//   const [prepTime, setPrepTime] = useState('')
//   const [ingredients, setIngredients] = useState([])
//   const [method, setMethod] = useState([])
  

//   function onSubmitHandler(e) {
//     e.preventDefault()

//     firebase
//       .firestore()
//       .collection('recipes')
//       .doc(recipe.id)
//       .update({
//         name,
//         serves,
//         prepTime,
//         ingredients: ingredients,
//         method: method
//       })
//       .then(() => {
//         setName('')
//         setServes('')
//         setPrepTime('')
//         setIngredients([])
//         setMethod([])
//       })
//     }
// console.log(recipe.name)
//   return (
//     <>
//     <form onSubmit={onSubmitHandler}>
//       <h4>Edit Recipe</h4>
//       <div>
//         <label>Title</label>
//         <input type='text' value={name} onChange={e => setName(e.currentTarget.value)} />
//       </div>
//       <div>
//         <label>Serves</label>
//         <input type='number' value={serves} onChange={e => setServes(e.currentTarget.value)} />
//       </div>
//       <div>
//         <label>Prep Time</label>
//         <input type='text' value={prepTime} onChange={e => setPrepTime(e.currentTarget.value)} />
//       </div>
//       <div>
//         <label>{`Ingredients (seperate by comma)`}</label>
//         <input type='text' value={ingredients} onChange={e => setIngredients(e.currentTarget.value.split(','))} />
//         <ul>{ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}</ul>
//       </div>
//       <div>
//         <label>{`Method (seperate by comma)`}</label>
//         <input type='text' value={method} onChange={e => setMethod(e.currentTarget.value.split(','))} />
//         <ol>{method.map(step => <li key={step}>{step}</li>)}</ol>
//       </div>
//       <button>Edit Recipe</button>
//     </form>

    
//     </>
//   )
// }

// export default EditRecipe