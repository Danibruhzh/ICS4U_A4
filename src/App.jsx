import { useState } from 'react'
import './App.css'
import Herons from "./components/Herons"
import Ambiguous from './components/Ambiguous'
import Newtons from './components/Newtons'
import Polynomial from './components/Polynomial'


function App() {
  return (
    <div className="grid-container">
      <div className="component-container">
        <Herons />
      </div>
      <div className="component-container">
        <Ambiguous />
      </div>
      <div className="component-container">
        <Newtons />
      </div>
      <div className="component-container">
        <Polynomial />
      </div>
    </div>
  )
}

export default App
