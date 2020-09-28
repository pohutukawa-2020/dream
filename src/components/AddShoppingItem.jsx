import React, { useState } from 'react'

import { addMiscItem } from '../utils'

const AddShoppingItem = () => {
  const [miscItem, setMiscItem] = useState('')

  function onSubmitHandler (evt) {
    evt.preventDefault()

    addMiscItem(miscItem)
  }
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <label>Add item to Shopping List</label>
        <input type="text" value={miscItem} onChange={e => setMiscItem(e.currentTarget.value)} />
        <button>Add</button>
      </form>
    </>
  )
}

export default AddShoppingItem
