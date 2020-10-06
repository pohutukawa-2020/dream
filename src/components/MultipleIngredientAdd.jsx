
import React, { useState, useContext } from 'react'
import { NewIngredientsContext } from './context/NewIngredientsContext'

export default function MultipleFormTest () {
  const [newIngredients, setNewIngredients] = useContext(NewIngredientsContext)
  // const [ingredients, setIngredients] = useState([{ quantity: null, quantityType: 't', name: '' }])
  // const [ingredients, setIngredients] = useState([])

  // handle input change
  const handleInputChange = (evt, idx) => {
    const { name, value } = evt.target
    const list = [...newIngredients]
    list[idx][name] = value
    setNewIngredients(list)
    // setNewIngredients([...ingredients], { name, value })
  }

  // handle click event of the Remove button
  const handleRemoveClick = idx => {
    const list = [...newIngredients]
    list.splice(idx, 1)
    setNewIngredients(list)
  }

  // handle click event of the Add button
  const handleAddClick = () => {
    setNewIngredients([...newIngredients, { quantity: null, quantityType: 't', name: '' }])
  }

  return (
    <div>
      {newIngredients.map((x, idx) => {
        return (
          <div>
          <div className="newIngredientField">
            <input 
              className="newIngredientQuantityField"
              name='quantity'
              type='number'
              size="4"
              maxlength='4'
              placeholder='Quantity'
              value={x.quantity}
              onChange={evt => handleInputChange(evt, idx)}
            />
            <select className="newIngredientQuantityTypeField"
              name='quantityType' onChange={evt => handleInputChange(evt, idx)}>
              <option value='t'>t</option>
              <option value='T'>T</option>
              <option value='mL'>mL</option>
              <option value='L'>L</option>
              <option value='g'>g</option>
              <option value='kg'>kg</option>
              <option value='can'>can</option>
              <option value='can'>cup</option>
              <option value=''></option>
            </select>
            <input
              className="newIngredientNameField"
              name="name"
			        placeholder="Enter Ingredient"
              value={x.name}
              onChange={evt => handleInputChange(evt, idx)}
            />

            <div className=
            'newIngredientX'>
              {newIngredients.length !== 1 && <h1
                onClick={() => handleRemoveClick(idx)}>X</h1>}
            </div>
          </div>
          <div className=
          'newIngredientPlus'>
            {newIngredients.length - 1 === idx && <button onClick={handleAddClick}>Add another ingredient</button>}
          </div>
          </div>
          
        )
      })}
    </div>
  )
}