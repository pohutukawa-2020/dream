import React, { useContext, useState } from 'react'

import firebase from 'firebase/app'

import { UserContext } from './context/UserContext'
import { RecipeContext } from './context/RecipeContext'
import RecipeCard from './RecipeCard'
import Seed from './Seed'

import { sortList } from '../utils.js'

export default function RecipesList() {
  const {user} = useContext(UserContext)
  const [recipes] = useContext(RecipeContext)
  const [sortBy, setSortBy] = useState('NAME_ASC')
  const [searchTerm, setSearchTerm] = useState('')
  const sortedRecipes = sortList([...recipes], sortBy)
  const filteredRecipes = sortedRecipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const changeHandler = (e) => {
    setSearchTerm(e.target.value)
    console.log(sortedRecipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase())))
  }

  return (
    <>
      <div className="RecipesList">
        <div className='recipeSort'>
          <div className="list">
          <input className='noBulmaBorderless recipeSearch' type='text' placeholder='search for a recipe...' onChange={e => changeHandler(e)}></input>
          <label>Sort:</label>
          <select className='recipeSortButton' value={sortBy} onChange={evt => setSortBy(evt.target.value)}>
            <option value='NAME_ASC'>Name (A-Z)</option>
            <option value='NAME_DESC'>Name (Z-A)</option>
            <option value='SERVES_ASC'>Serves (Ascending)</option>
            <option value='SERVES_DESC'>Serves (Descending)</option>
          </select>
          </div>
        </div>
        <div className='seperation'></div>

          <ul>
          <div className='cardColumns'>
            {filteredRecipes.map(recipe =>
              <li key={recipe.id}>
                <RecipeCard recipe={recipe} />
              </li>
            )}
                    </div>
          </ul>

        <Seed /> {/* --- TO BE DELETED FROM PRODUCTION --- */}
      </div>
    </>
  )
}
