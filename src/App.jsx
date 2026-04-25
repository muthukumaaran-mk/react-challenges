import Input from "./Input"
import Square from "./Square"
import { useState } from "React"

function App() {
  const [colorvalue, setColorValue ] = useState('')
  const [isDarkText, setIsDarkText ] = useState(true)
  const [hexValue, setHexValue] = useState('')
  return (
    <div>
    <Input 
    colorValue={colorvalue}
    setColorValue={setColorValue}
    setIsDarkText={setIsDarkText}
    isDarkText={isDarkText}
    setHexValue={setHexValue} /> 
    <Square 
    colorValue={colorvalue}
    isDarkText={isDarkText}
    hexValue={hexValue} />
    </div>
  )

}

export default App
