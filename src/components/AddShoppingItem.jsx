import React, { useState } from "react";

import { addMiscItem } from "../utils";

const AddShoppingItem = (props) => {
    const [miscItem, setMiscItem] = useState('')

    function onSubmitHandler(evt) {
        evt.preventDefault()
        
        addMiscItem()
    }
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <label>Add item to Shopping List</label>
        <input type="text" value='' />
        <button>Add</button>
      </form>
    </>
  )
}

export default AddShoppingItem
