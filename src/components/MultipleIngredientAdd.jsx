
import React, { useState } from 'react'

export default function MultipleFormTest () {
  const [ingredients, setIngredients] = useState([{ quantity: null, quantityType: 't', name: '' }])
  // const [ingredients, setIngredients] = useState([])

  // handle input change
  const handleInputChange = (evt, idx) => {
    const { name, value } = evt.target
    const list = [...ingredients]
    list[idx][name] = value
    setIngredients(list)
    // setIngredients([...ingredients], { name, value })
  }

  // handle click event of the Remove button
  const handleRemoveClick = idx => {
    const list = [...ingredients]
    list.splice(idx, 1)
    setIngredients(list)
  }

  // handle click event of the Add button
  const handleAddClick = () => {
    setIngredients([...ingredients, { quantity: null, quantityType: 't', name: '' }])
  }

  return (
    <div className="newIngredientField">
      {ingredients.map((x, idx) => {
        return (
          <div>
            <input 
              name='quantity'
              type='number'
              placeholder='Quantity'
              value={x.quantity}
              onChange={evt => handleInputChange(evt, idx)}
            />
            <select name='quantityType' onChange={evt => handleInputChange(evt, idx)}>
              <option value='teaspoon'>t</option>
              <option value='tablespoon'>T</option>
              <option value='mL'>mL</option>
              <option value='litre'>Litre</option>
              <option value='grams'>g</option>
              <option value='kiloGrams'>kg</option>
              <option value='can'>Can</option>
              <option value='can'>Cup</option>
              <option value='item'>item</option>
            </select>
            <input
              name="name"
			        placeholder="Enter Ingredient"
              value={x.name}
              onChange={evt => handleInputChange(evt, idx)}
            />
            <div>
              {ingredients.length !== 1 && <button
                onClick={() => handleRemoveClick(idx)}>Remove</button>}
              {ingredients.length - 1 === idx && <button onClick={handleAddClick}>Add</button>}
            </div>
          </div>
        )
      })}
    </div>
  )
}