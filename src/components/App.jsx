import '../App.scss'
import React from "react";
import { Route, Link } from "react-router-dom";


import {Nav} from "./Nav";
import Recipes from "./Recipes";
import Week from "./Week";
import Shopping from "./Shopping";
import ExpandedRecipeCard from "./ExpandedRecipeCard";
import AddRecipe from'./AddRecipe'
import Seed from './Seed'

function App () {
  return (
    <> 
      <div className="App">
        {/* <h1><Link to="/">RECIPLAN APP!</Link></h1> */}
        <div className="routes">
          <Route path="/" component={Nav} />
          <Route exact path='/' component={Seed} />
          <Route exact path="/recipes" component={Recipes} />
          <Route exact path="/recipes/add" component={AddRecipe} />
          <Route exact path="/recipe/:id" component={ExpandedRecipeCard} />
          <Route exact path="/week" component={Week} />
          <Route exact path="/shopping" component={Shopping} />
          <Route exact path="/shopping/add" component={Shopping} />
        </div>
      </div>
    </>
  )
}

export default App
