import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/analytics'

import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import App from './components/App'
import { RecipeProvider } from './components/RecipeContext'
import { WeekProvider } from 'components/WeekContext'
import { ShoppingListProvider } from 'components/ShoppingListContext'
import { MiscShoppingProvider } from 'components/MiscShoppingContext'
import { SelectedDayProvider } from 'components/SelectedDayContext'
import { UserProvider } from 'components/UserContext'

firebase.initializeApp({
  apiKey: "AIzaSyBOmaFW54_Uc_NHxJ-LMTETeQ_N6I8qtps",
  authDomain: "reciplan-50a10.firebaseapp.com",
  databaseURL: "https://reciplan-50a10.firebaseio.com",
  projectId: "reciplan-50a10",
  storageBucket: "reciplan-50a10.appspot.com",
  messagingSenderId: "835692964752",
  appId: "1:835692964752:web:57a935be2507442b3a6115",
  measurementId: "G-LWEQSS5R3R"
})
firebase.analytics()
// firebase.auth().onAuthStateChanged(console.log('auth state changed'))

ReactDOM.render(
  <Router>
    <UserProvider>
      <RecipeProvider>
        <WeekProvider>
          <ShoppingListProvider>
            <MiscShoppingProvider>
              <SelectedDayProvider>
                <App />
              </SelectedDayProvider>
            </MiscShoppingProvider>
          </ShoppingListProvider>
        </WeekProvider>
      </RecipeProvider>
    </UserProvider>
  </Router>,
  document.getElementById('root')
)
