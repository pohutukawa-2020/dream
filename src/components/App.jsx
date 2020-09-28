import '../App.scss'
import React from "react";
import { Route, Redirect } from "react-router-dom";


import {Nav} from "./Nav";
import Recipes from "./Recipes";
import Week from "./Week";
import Shopping from "./Shopping";
import ExpandedRecipeCard from "./ExpandedRecipeCard";
import AddRecipe from'./AddRecipe'
import EditRecipe from './EditRecipe';
import MiscShoppingList from './MiscShoppingList';

import Home from './Home'
import SignUp from './SignUp'

function App () {
  return (
    <> 
    <section class="hero is-primary">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        ReciPlan
      </h1>
      <h2 class="subtitle">
        ReciPlan your week...
      </h2>
    </div>
  </div>
</section>
      <div className="App">
        <div className="routes">
          {/* <Route path="/" component={Header} /> */}
          <Route path="/" component={Nav} />
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
            <Route exact path="/shopping" component={MiscShoppingList} />
            <Route exact path="/shopping/add" component={Shopping} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
