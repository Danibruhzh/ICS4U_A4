import { useState } from 'react'
import './App.css'
import Herons from "./components/Herons"
import Ambiguous from './components/Ambiguous'
import Newtons from './components/Newtons'
import Polynomial from './components/Polynomial'


function App() {
  return (
    <>
      <Herons />
      <Ambiguous />
      <Newtons />
      <Polynomial />
    </>
  )
}

export default App
