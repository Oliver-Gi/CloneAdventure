import '../App.css'
import React from 'react'
import { createContext, useContext, useState } from 'react';
import StartScreen from '../GameScreens/startScreen';

export const ScreenContext = createContext(null);

const Game = () => {
    const [screen, setScreen] = useState('start')
    return(
        <ScreenContext.Provider value={screen}>
            {screen  === 'start' && <StartScreen/>}
        </ScreenContext.Provider>
    )
}

export default Game