import { useState } from 'react'
import './App.css'
import Herons from "./components/Herons"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Herons />
    </>
  )
}

export default App
