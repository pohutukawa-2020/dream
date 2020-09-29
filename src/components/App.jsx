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

function App () {
  return (
    <> 
        <div className="routes">
          <Route path="/" component={Nav} />
          <div className='ccontent'>
            <Route exact path='/'><Redirect to='/week'/></Route>
            <Route exact path="/recipes" component={Recipes} />
            <Route exact path="/recipes/add" component={AddRecipe} />
            <Route exact path="/recipe/:id" component={ExpandedRecipeCard} />
            <Route exact path="/recipe/edit/:id" component={EditRecipe} />
            <Route exact path="/week" component={Week} />
            <Route exact path="/shopping" component={Shopping} />
            <Route exact path="/shopping/add" component={Shopping} />
          </div>
        </div>
    </>
  )
}

export default App
