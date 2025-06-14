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
      <div className="overflow-x-hidden">
      <Navbar/>
      {/*TITLE*/}
      <Title/>
      <Instructions/>
      <Story/>
      <div>
        <Game/>
      </div>
      <Version/>
      </div>
  )
}

export default App
