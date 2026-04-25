import colorNames from 'colornames'
import React from 'react'

const Input = ({ colorValue, setColorValue, setIsDarkText, isDarkText, setHexValue }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Add Color Name:  </label>
      <input type="text"
      autoFocus
      required
      value={colorValue}
      onChange={(e) => {setColorValue(e.target.value)
        setHexValue(colorNames(e.target.value))
      }} />

      <button type='button'
      onClick={() => setIsDarkText(!isDarkText)}>
        Toggle button
      </button>
    </form>
  )
}

export default Input