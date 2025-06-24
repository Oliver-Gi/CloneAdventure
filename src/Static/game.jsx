import '../App.css'
import React from 'react'
import { createContext, useContext, useState } from 'react';
import StartScreen from '../GameScreens/startScreen';
import DifficultySelect from '../GameScreens/difficultySelect';
import CharacterScreen from '../GameScreens/characterScreen';

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
                        setScreen('character');
                    }}
                    normal={() => {
                        difficulty = 'normal';
                        setScreen('character');
                    }}
                    hard={() => {
                        difficulty = 'hard';
                        setScreen('character');
                    }}
                    insane={() => {
                        difficulty = 'insane';
                        setScreen('character');
                    }}
                />
            )}
            {screen === 'character' && (
                <CharacterScreen difficulty={() => setScreen('difficulty') }/>)}
        </div>
    )
}

export default Game