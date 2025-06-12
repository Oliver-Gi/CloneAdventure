import '../App.css'
import React from 'react'
import { createContext, useContext, useState } from 'react';
import StartScreen from '../GameScreens/startScreen';
import DifficultySelect from '../GameScreens/difficultySelect';

export const ScreenContext = createContext(null);
export var difficulty = 'easy';

const Game = () => {
    const [screen, setScreen] = useState('start')
    return(
        <div>
            {screen  === 'start' && (
                <StartScreen difficulty={() => setScreen('difficulty') } />)}
            {screen  === 'difficulty' && (
                <DifficultySelect   start={() => {setScreen('start') }}
                    easy={() => {
                        difficulty = 'easy';
                        alert(difficulty);
                    }}
                    normal={() => {
                        difficulty = 'normal';
                        alert(difficulty);
                    }}
                    hard={() => {
                        difficulty = 'hard';
                        alert(difficulty);
                    }}
                    insane={() => {
                        difficulty = 'insane';
                        alert(difficulty);
                    }}
                />
            )}
        </div>
    )
}

export default Game