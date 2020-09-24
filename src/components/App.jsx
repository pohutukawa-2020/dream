import React from "react";
import { Route } from "react-router-dom";

import "./App.scss";

import Nav from "./Nav";
import Recipes from "./Recipes";
import Week from "./Week";
import Shopping from "./Shopping";

function App() {
  return (
    <>
    <div className="App">
      <h1>RECIPLAN APP!</h1>
      <div className="routes">
        <a href="#" className="button is-primary">
          Press Me!
        </a>
        <Route path="/" component={Nav} />
        <Route exact path="/recipes" component={Recipes} />
        <Route exact path="/week" component={Week} />
        <Route exact path="/shopping" component={Shopping} />
      </div>
    </div>
    <div class="card">
    <div class="card-image">
      <figure class="image is-96x96">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">John Smith</p>
          <p class="subtitle is-6">@johnsmith</p>
        </div>
      </div>
  
      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
        <a href="#">#css</a> <a href="#">#responsive</a>
        <br/>
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>
    </div>
  </div>
  </>
  );
}

export default App;
