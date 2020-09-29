import React, {useState, useContext} from 'react'
import { StrikeOutContext } from './context/StrikeoutContext'

function MiscItem ({newItem}) {
// const [striked, setStriked]=useContext(StrikeOutContext)
const [strike, setStrike]=useState({state: false,
style: null })

const cross = () => {
  strike ? setStrike({state:true, style: {textDecoration:'line-through'}}) : setStrike({state:false, style: null})
}
  return (
    <>
    <h5 onClick={() => cross()} style={strike.style} >{newItem}</h5>
    </>
    
  )
}

export default MiscItem