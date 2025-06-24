import '../App.css'
import React from 'react'
import { createContext, useContext, useState } from 'react';
import { ScreenContext } from '../Static/game';
import { difficulty } from '../Static/game';
import Caidyn from '../Resources/Sprites/Caidyn/caidynSelect.png'
import Luka from '../Resources/Sprites/Luka/lukaSelect.png'
import Ollie from '../Resources/Sprites/Ollie/ollieSelect.png'
import Ren from '../Resources/Sprites/Ren/renSelect.png'

const CharacterScreen = (props) => {
    return(
        <div class="bg-[url('../Resources/Backgrounds/secondNotebookScreen.png')] bg-no-repeat bg-cover bg-center w-[80vw] h-[45vw] ml-[10vw] mt-[1vw]">
            <h1 class="font-bold text-center
                    sm:text-[1.75rem]
                    md:text-[2rem]
                    lg:text-[2.5rem]
                    xl:text-[3rem]
                    2xl:text-[4rem]">Character Information</h1>
            <div class="flex flex-row w-[80vw]">
                <img class="h-[20vw] mt-[0vw]" src={Caidyn} alt="Caidyn"/>
                <img class="h-[20vw] mt-[0vw]" src={Luka} alt="Caidyn"/>
                <img class="h-[20vw] mt-[0vw]" src={Ollie} alt="Caidyn"/>
                <img class="h-[20vw] mt-[0vw]" src={Ren} alt="Caidyn"/>
            </div>
            <div class="flex flex-row w-[80vw]">
                <button class="mt-[1vw] ml-[4vw] w-[15vw] h-[5vw] bg-[#c5a8e7] text-[#311255]
                    rounded-sm border-[0.05rem] border-[#311255] text-[1rem]
                    sm:text-[1rem] sm:border-[0.1rem]
                    md:text-[1.75rem] md:border-[0.2rem]
                    lg:text-[2rem] lg:border-[0.3rem]
                    xl:text-[2.5rem] xl:border-[0.4rem]
                    2xl:text-[3rem] 2xl:border-[0.5rem]
                    hover:border-[#541132] hover:bg-[#e8a9c8] hover:text-[#541132]"
                    onClick={props.caidyn}>Caidyn
                </button>
                <button class="mt-[1vw] ml-[4vw] w-[15vw] h-[5vw] bg-[#c5a8e7] text-[#311255]
                    rounded-sm border-[0.05rem] border-[#311255] text-[1rem]
                    sm:text-[1rem] sm:border-[0.1rem]
                    md:text-[1.75rem] md:border-[0.2rem]
                    lg:text-[2rem] lg:border-[0.3rem]
                    xl:text-[2.5rem] xl:border-[0.4rem]
                    2xl:text-[3rem] 2xl:border-[0.5rem]
                    hover:border-[#541132] hover:bg-[#e8a9c8] hover:text-[#541132]"
                    onClick={props.luka}>Luka
                </button>
                <button class="mt-[1vw] ml-[4vw] w-[15vw] h-[5vw] bg-[#c5a8e7] text-[#311255]
                    rounded-sm border-[0.05rem] border-[#311255] text-[1rem]
                    sm:text-[1rem] sm:border-[0.1rem]
                    md:text-[1.75rem] md:border-[0.2rem]
                    lg:text-[2rem] lg:border-[0.3rem]
                    xl:text-[2.5rem] xl:border-[0.4rem]
                    2xl:text-[3rem] 2xl:border-[0.5rem]
                    hover:border-[#541132] hover:bg-[#e8a9c8] hover:text-[#541132]"
                    onClick={props.ollie}>Ollie
                </button>
                <button class="mt-[1vw] ml-[4vw] w-[15vw] h-[5vw] bg-[#c5a8e7] text-[#311255]
                    rounded-sm border-[0.05rem] border-[#311255] text-[1rem]
                    sm:text-[1rem] sm:border-[0.1rem]
                    md:text-[1.75rem] md:border-[0.2rem]
                    lg:text-[2rem] lg:border-[0.3rem]
                    xl:text-[2.5rem] xl:border-[0.4rem]
                    2xl:text-[3rem] 2xl:border-[0.5rem]
                    hover:border-[#541132] hover:bg-[#e8a9c8] hover:text-[#541132]"
                    onClick={props.ren}>Ren
                </button>
            </div>
            <div class="flex flex-row w-[80vw]">
                <button class="mt-[5vw] ml-[5vw] w-[36vw] h-[6vw] bg-[#c5a8e7] text-[#311255]
                rounded-sm border-[0.05rem] border-[#311255] text-[1rem]
                sm:text-[1.5rem] sm:border-[0.1rem]
                md:text-[2rem] md:border-[0.2rem]
                lg:text-[2.5rem] lg:border-[0.3rem]
                xl:text-[3rem] xl:border-[0.4rem]
                2xl:text-[4rem] 2xl:border-[0.5rem]
                hover:border-[#541132] hover:bg-[#e8a9c8] hover:text-[#541132]"
                onClick={props.difficulty}>{"<"}- Back
            </button>
            <button class="mt-[5vw] ml-[5vw] mr-[5vw] w-[36vw] h-[6vw] bg-[#c5a8e7] text-[#311255]
                rounded-sm border-[0.05rem] border-[#311255] text-[1rem]
                sm:text-[1.5rem] sm:border-[0.1rem]
                md:text-[2rem] md:border-[0.2rem]
                lg:text-[2.5rem] lg:border-[0.3rem]
                xl:text-[3rem] xl:border-[0.4rem]
                2xl:text-[4rem] 2xl:border-[0.5rem]
                hover:border-[#541132] hover:bg-[#e8a9c8] hover:text-[#541132]"
                onClick={props.map}>Next -{">"}
            </button>
            </div>
        </div>
    )
}

export default CharacterScreen