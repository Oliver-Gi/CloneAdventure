import '../App.css'
import React from 'react'
import { createContext, useContext, useState } from 'react';
import { ScreenContext } from '../Static/game';
import Caidyn from '../Resources/Sprites/Caidyn/caidynSelect.png'
import Luka from '../Resources/Sprites/Luka/lukaSelect.png'
import Ollie from '../Resources/Sprites/Ollie/ollieSelect.png'
import Ren from '../Resources/Sprites/Ren/renSelect.png'
import difficultySelect from './difficultySelect';


const StartScreen = (props) => {
    return(
            <div class="bg-[url('../Resources/Backgrounds/startScreen.png')] bg-no-repeat bg-cover bg-center w-[80vw] h-[45vw] ml-[10vw]">
                <button class="mt-[0.5vw] ml-[20vw] w-[36vw] h-[8vw] bg-[#c5a8e7] text-[#311255]
                rounded-sm border-[0.05rem] border-[#311255] text-[1rem]
                sm:text-[1.75rem] sm:border-[0.1rem]
                md:text-[2rem] md:border-[0.2rem]
                lg:text-[2.5rem] lg:border-[0.3rem]
                xl:text-[3rem] xl:border-[0.4rem]
                2xl:text-[4rem] 2xl:border-[0.5rem]
                hover:border-[#541132] hover:bg-[#e8a9c8] hover:text-[#541132]"
                onClick={props.difficulty}>Play</button>
                <div class="flex flex-row w-[70vw]">
                    <img class="h-[20vw] mt-[10vw]" src={Caidyn} alt="Caidyn"/>
                    <img class="h-[20vw] mt-[15vw]" src={Luka} alt="Caidyn"/>
                    <img class="h-[20vw] mt-[15vw]" src={Ollie} alt="Caidyn"/>
                    <img class="h-[20vw] mt-[10vw]" src={Ren} alt="Caidyn"/>
                </div>
            </div>  
    )
}

export default StartScreen