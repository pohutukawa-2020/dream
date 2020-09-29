import React, {useState, useContext} from 'react'
import { deleteSingleIngredient } from '../utils'
import { StrikeOutContext } from './context/StrikeoutContext'
import {MiscShoppingContext} from './context/MiscShoppingContext'
function MiscItem ({newItem, id}) {
// const [striked, setStriked]=useContext(StrikeOutContext)
const [strike, setStrike]=useState({state: false,
style: null })

const [miscCollection,setMiscCollection] = useContext(MiscShoppingContext)

const cross = () => {
  strike ? setStrike({state:true, style: {textDecoration:'line-through'}}) : setStrike({state:false, style: null})
}

console.log('newItem id: ', id)
console.log('miscContext: ', miscCollection)

  return (
    <>
    <div ClassName="shoppingText">
      <h5 onClick={() => cross()} style={strike.style} >{newItem} <span className='destroyerOfIngredients' onClick={() => deleteSingleIngredient(id)}><i class="fas fa-times"></i></span></h5> 
      </div>
    </>
    
  )
}

export default MiscItem