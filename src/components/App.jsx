import React from "react";
import { Route, Link } from "react-router-dom";

import "../App.scss"; 

import Nav from "./Nav";
import Recipes from "./Recipes";
import Week from "./Week";
import Shopping from "./Shopping";
import Card from "./Card"
import ExpandedCard from "./ExpandedCard";

function App() {
  return (
    <>
    <div className="App">
      <h1><Link to="/">RECIPLAN APP!</Link></h1>
      <div className="routes">
        <a href="#" className="button is-primary">
          Press Me!
        </a>
        <Route path="/" component={Nav} />
        <Route exact path="/" component={Card} />
        <Route exact path="/recipes" component={Recipes} />
        <Route exact path="/week" component={Week} />
        <Route exact path="/shopping" component={Shopping} />
        <Route exact path="/recipe" component={ExpandedCard} />
      </div>
    </div>
  
    
  
  </>
  );
}

export default App;
