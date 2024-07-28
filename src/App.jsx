import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Clients from './components/Clients'
import Achievements from './components/Achievements'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Clients/>
      <Achievements/>
    </>
  )
}

export default App
