import React, {useState} from 'react'
import { deleteSingleIngredient } from '../utils'

export default function ShoppingListItem ({shoppingListItem, id}) {
const [strike, setStrike]=useState({state: true, style: null})

const cross = () => {
  strike.state ? setStrike({state: false, style: {textDecoration:'line-through'}}) : setStrike({state: true, style: null })
}
  return (
    <>
      <h5 className='shoppingListIngredients' onClick={() => cross()} style={strike.style}>{shoppingListItem.quantity}{' '}{shoppingListItem.name}<span className='destroyerOfIngredients' onClick={() => deleteSingleIngredient(id)}><i class="fas fa-times"></i></span></h5>
    </>
  )
}
