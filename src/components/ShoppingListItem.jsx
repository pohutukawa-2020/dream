import React, {useState} from 'react'

function ShoppingListItem ({shoppingListItem}) {
const [strike, setStrike] =useState({state: false, style: null })

const cross = () => {
  strike ? setStrike({state:true, style: {textDecoration:'line-through'}}) : setStrike({state:false, style: null})
}
  return (
    <>
      <h5 onClick={() => cross()} style={strike.style}>{shoppingListItem.quantity}{' '}{shoppingListItem.name}</h5>
    </>
  )
}

export default ShoppingListItem