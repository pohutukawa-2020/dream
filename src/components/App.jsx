import '../App.scss'
import React, { useState, useContext, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { Nav } from './Nav'
import Recipes from './Recipes'
import Week from './Week'
import Shopping from './Shopping'
import ExpandedRecipeCard from './ExpandedRecipeCard'
import AddRecipe from './AddRecipe'
import EditRecipe from './EditRecipe'
import { UserContext } from './context/UserContext'

import Home from './Home'
import SignUp from './SignUp'
import SignOut from './SignOut'
import Header from './Header'
import HeaderCopy from './HeaderCopy'

function App () {
  const {user} = useContext(UserContext)
  const [auth, setAuth] = useState({authenticated: false, loading: true})

  useEffect(() => {
    if (user) {
      setAuth({authenticated: true, loading: false})
    } else {setAuth({authenticated: false, loading: false})}
  }, [user])

  if (auth.loading) {
    return (<div>is loading</div>)
  } else {
    if (auth.authenticated) {
      return (
        <div className="contentRoutes">
          <Route path="/" component={Nav} />
          <Route path='/' component={SignOut} /> 
          <Route exact path='/'><Redirect to='/recipes'/></Route>
          <Route exact path='/home'><Redirect to='recipes'/></Route>
          <Route path='/recipes' component={HeaderCopy} />
          <Route exact path="/recipes" component={Recipes} />
          <Route exact path="/recipes/add" component={AddRecipe} />
          <Route exact path="/recipe/:id" component={ExpandedRecipeCard} />
          <Route exact path="/recipe/edit/:id" component={EditRecipe} />
          <Route path='/week' component={HeaderCopy} />
          <Route exact path="/week" component={Week} />
          <Route path='/shopping' component={HeaderCopy} />
          <Route exact path="/shopping" component={Shopping} />
          <Route exact path="/shopping/add" component={Shopping} />
        </div>
      )
    } else {
      return (
        <div className="contentRoutes">
          <Route path='/home' component={Home} />
          <Route path='/sign-up' component={SignUp} />
          <Route exact path='/'><Redirect to='/home'/></Route>
          <Route exact path='/recipes'><Redirect to='/home'/></Route>
          <Route exact path="/recipes/add"><Redirect to='/home'/></Route>
          <Route exact path="/recipe/:id"><Redirect to='/home'/></Route>
          <Route exact path='/week'><Redirect to='/home'/></Route>
          <Route exact path='/shopping'><Redirect to='/home'/></Route>
          <Route exact path="/shopping/add"><Redirect to='/home'/></Route>
      </div>
      )
    }
  }
}

export default App
