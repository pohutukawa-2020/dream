import React, { useState, useContext } from 'react'

import { addMiscItem } from '../utils'
import { MiscShoppingContext } from './MiscShoppingContext'
import { UserContext } from './UserContext'

const MiscShoppingListItem = () => {
  const {user} = useContext(UserContext)
  const [miscItem, setMiscItem] = useState('')
  const [miscCollection] = useContext(MiscShoppingContext)

  function onSubmitHandler (evt) {
    evt.preventDefault()

    addMiscItem(user.uid, miscItem)
    setMiscItem('')
  }
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <label>Add item to Shopping List</label><br></br>
        <input type="text" value={miscItem} onChange={e => setMiscItem(e.currentTarget.value)} />
        <button>Add</button>
        <ul>
          {miscCollection.map(item =>
            <li key={item.id}>
              <h5>{item.newItem}</h5>
            </li>
          )}
        </ul>
      </form>
    </>
  )
}

export default MiscShoppingListItem
