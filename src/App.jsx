import React from 'react'
import { Route } from 'react-router-dom'

import Nav from './Nav'
import Recipes from './Recipes'
import Week from './Week'
import Shopping from './Shopping'

function App () {
  return (
    <div className="App">
      <h1>RECIPLAN APP!</h1>
      <div className='routes'>
        <Route path='/' component={Nav} />
        <Route exact path='/recipes' component={Recipes} />
        <Route exact path='/week' component={Week} />
        <Route exact path='/shopping' component={Shopping} />
      </div>
    </div>
  )
}

export default App
