import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Manager from './components/Manager.jsx'


function App() {
  return (
    <>
      <Navbar />
      <Manager />
    </>
  )
}

export default App
