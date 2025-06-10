import '../App.css'
import React from 'react'
import { createContext, useContext, useState } from 'react';
import StartScreen from '../GameScreens/startScreen';
import DifficultySelect from '../GameScreens/difficultySelect';

export const ScreenContext = createContext(null);

const Game = () => {
    const [screen, setScreen] = useState('start')
    return(
        <div>
            {screen  === 'start' && (
                <StartScreen difficulty={() => setScreen('difficulty') } />)}
            {screen  === 'difficulty' && <DifficultySelect/>}
        </div>
    )
}

export default Game