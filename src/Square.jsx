import React from 'react'

const Square = ({ colorValue, isDarkText, hexValue }) => {
  const style = { backgroundColor: colorValue,
    color: isDarkText ? "black" : "white"
  }
  return (
    <div>
      <p style={style}>{colorValue ? colorValue : "Empty Value"}</p>
      <p>{hexValue ? hexValue : "Null"}</p>
    </div>
  )
}

export default Square