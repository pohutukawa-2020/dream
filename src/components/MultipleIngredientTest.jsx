import React, { useState } from 'react'

export default function MultipleFormTest () {
  const [inputList, setInputList] = useState([{ newIngredient: '' }])

  // handle input change
  const handleInputChange = (evt, idx) => {
    const { name, value } = evt.target
    const list = [...inputList]
    list[idx][name] = value
    setInputList(list)
  }

  // handle click event of the Remove button
  const handleRemoveClick = idx => {
    const list = [...inputList]
    list.splice(idx, 1)
    setInputList(list)
  }

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { newIngredient: '' }])
  }

  return (
    <div className="newIngredientField">
      {inputList.map((x, idx) => {
        return (
          <div>
            <input
              name="newIngredient"
			        placeholder="Enter Ingredient"
              value={x.newIngredient}
              onChange={evt => handleInputChange(evt, idx)}
            />
            <div>
              {inputList.length !== 1 && <button
                onClick={() => handleRemoveClick(idx)}>Remove</button>}
              {inputList.length - 1 === idx && <button onClick={handleAddClick}>Add</button>}
            </div>
          </div>
        )
      })}
    </div>
  )
}
