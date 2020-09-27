import React, { useState, useContext } from "react";

import { addMiscItem } from "../utils";
import { MiscShoppingContext } from "./MiscShoppingContext"

const MiscShoppingListItem = () => {
    const [miscItem, setMiscItem] = useState('')
    const [miscCollection] = useContext(MiscShoppingContext)

    function onSubmitHandler(evt) {
        evt.preventDefault()
        
        addMiscItem(miscItem)
        setMiscItem('')
    }
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <label>Add item to Shopping List</label>
        <input type="text" value={miscItem} onChange={e => setMiscItem(e.currentTarget.value)} />
        <button>Add</button>
        <ul>
            {miscCollection.map(item => 
            <li key={item.id}>
                <p>{item.newItem}</p>
            </li>
            )}
        </ul>
      </form>
    </>
  )
}

export default MiscShoppingListItem