import React, { useState } from 'react'
import ColorBlock from './Colorblock'
import ColorForm from './ColorForm'

function App() {
  let [colors, setColors] = useState([
    'violet', 'blue',
    'lightblue', 'green',
    'greenyellow', 'yellow',
    'orange', 'red'
  ])




  const colorMap = colors.map((color, i) => {
    return (
      <ColorBlock color={color} />
    )
  })


  const addColor = (newColor) => {
    setColors([...colors, newColor])
  }

  return (
    <div className="App">
      {colorMap}
      <ColorForm addColor={addColor} />
    </div>
  )

}

export default App;