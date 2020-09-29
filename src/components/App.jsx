import '../App.scss'
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { Nav } from './Nav'
import Recipes from './Recipes'
import Week from './Week'
import Shopping from './Shopping'
import ExpandedRecipeCard from './ExpandedRecipeCard'
import AddRecipe from './AddRecipe'
import EditRecipe from './EditRecipe'

import Home from './Home'
import SignUp from './SignUp'
import SignOut from './SignOut'

function App () {
  return (
    <> 
      <div className="logo">
        <img src="../rp.png" alt="Logo"/>
      </div>
        <div className="routes">
          <Route path="/" component={Nav} />
          <Route path='/' component={SignOut} /> 
          <Route exact path='/'><Redirect to='/home'/></Route>
          <div className='authenticationRoutes'>
            <Route path='/home' component={Home} />
            <Route path='/sign-up' component={SignUp} />
          </div>
          <div className='contentRoutes'>
            <Route exact path="/recipes" component={Recipes} />
            <Route exact path="/recipes/add" component={AddRecipe} />
            <Route exact path="/recipe/:id" component={ExpandedRecipeCard} />
            <Route exact path="/recipe/edit/:id" component={EditRecipe} />
            <Route exact path="/week" component={Week} />
            <Route exact path="/shopping" component={Shopping} />
          </div>
        </div>
    </>
  )
}

export default App
