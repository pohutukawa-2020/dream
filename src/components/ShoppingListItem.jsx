import React, {useState} from 'react'
import { deleteSingleIngredient } from '../utils'
function ShoppingListItem ({shoppingListItem, id}) {
const [strike, setStrike] =useState({state: false, style: null })

const cross = () => {
  strike ? setStrike({state:true, style: {textDecoration:'line-through'}}) : setStrike({state:false, style: null})
}
  return (
    <>
      <h5 onClick={() => cross()} style={strike.style}>{shoppingListItem.quantity}{' '}{shoppingListItem.name}<span className='destroyerOfIngredients' onClick={() => deleteSingleIngredient(id)}><i class="fas fa-times"></i></span></h5>
    </>
  )
}

export default ShoppingListItem