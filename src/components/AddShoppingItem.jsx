import React from "react";

import { addMiscItem } from "../utils";

const AddShoppingItem = () => {
  return (
    <>
      <form>
        <label>Add item to Shopping List</label>
        <input type="text" value='' />
        <button>Add</button>
      </form>
    </>
  )
}

export default AddShoppingItem
