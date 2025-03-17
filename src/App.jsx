import React from 'react'
import './App.css'
import Navbar from './Navbars/Navbar'
import Title from './Static/title'
import Instructions from './Static/howToPlay'
import Story from './Static/Story'
import Game from './Static/game'
import Version from './Static/versionNotes'

function App() {

  return (
    <div>
    <Navbar/>
    {/*TITLE*/}
    <Title/>
    <Instructions/>
    <Story/>
    <div class="bg-fuchsia-950">
      <Game/>
    </div>
    <Version/>
    </div>
  )
}

export default App
