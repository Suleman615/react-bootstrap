import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Clients from './components/Clients'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Clients/>
    </>
  )
}

export default App
