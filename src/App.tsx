import { useState } from 'react'
import NavBar from './components/navbar'
import Bio from './components/bio'
import Socials from './components/socials'
import './App.css'

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Bio />
        <Socials />
      </div>
    </>
  )
}

export default App
