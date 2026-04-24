import React from 'react'

const Square = ({ colorValue, hexValue, isDarkText }) => {
    const style = { backgroundColor: colorValue,
        color: isDarkText ? "black" : "white"
    }
  return (
    <section className='square'
    style={style}>
        <p>{ colorValue ? colorValue : "Empty Value"}</p>
        <p>{ hexValue ? hexValue : "Null"}</p>
    </section>
  )
}

export default Square