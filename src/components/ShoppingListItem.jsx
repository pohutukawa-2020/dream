import React, {useState} from 'react'


function ShoppingListItem ({ingredient}) {
  const [yum, setYum]=useState(false)
// const selectedIgredient = yum ? setYum(false) : setYum(true)

  return (
    <>
    <h5 className='strikeIngredient'>{ingredient}</h5>
      </>
    
  )
}

export default ShoppingListItem