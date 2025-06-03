import { useState } from 'react'
import NavBar from './components/navbar'
import Bio from './components/bio'
import Socials from './components/socials'
import Notes from './components/notes'
import './App.css'

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Bio />
        <Notes />
        <Socials />
      </div>
    </>
  )
}

export default App
