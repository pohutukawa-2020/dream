import React, { useState, useContext } from 'react'

import { addMiscItem } from '../utils'

import { UserContext } from './context/UserContext'

import { MiscShoppingContext } from './context/MiscShoppingContext'
import MiscItem from './MiscItem'

const MiscShoppingListItem = () => {
  const {user} = useContext(UserContext)
  const [miscItem, setMiscItem] = useState('')
  const [miscCollection] = useContext(MiscShoppingContext)

  function onSubmitHandler (evt) {
    evt.preventDefault()

    addMiscItem(user.uid, miscItem)
    setMiscItem('')
  }
  console.log('miscitem= ',miscItem)
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <label>Add item to Shopping List</label><br></br>
        <input type="text" value={miscItem} onChange={e => setMiscItem(e.currentTarget.value)} />
        <button>Add</button>
        <ul>
          {miscCollection.map(item =>
            <li key={item.id}>
             <MiscItem newItem={item.newItem} id={item.id}/>
            </li>
          )}
        </ul>
      </form>
    </>
  )
}

export default MiscShoppingListItem
