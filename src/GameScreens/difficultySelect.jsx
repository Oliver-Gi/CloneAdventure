import '../App.css'
import React from 'react'
import { createContext, useContext, useState } from 'react';
import { ScreenContext } from '../Static/game';
import { difficulty } from '../Static/game';

const DifficultySelect = (props) => {
    return(
        <div class="bg-[url('../Resources/Backgrounds/notebookScreen.png')] bg-no-repeat bg-cover bg-center w-[80vw] h-[45vw] ml-[10vw] mt-[1vw]">
            <h1 class="text-5xl font-bold text-center">DIFFICULTY SELECTION</h1>
            <div class="flex flex-row w-[80vw]">
                <button class="mt-[5vw] ml-[4vw] w-[15vw] h-[25vw] bg-[#c5a8e7] text-[#311255]
                    rounded-sm border-[0.05rem] border-[#311255] text-[1rem]
                    sm:text-[1.75rem] sm:border-[0.1rem]
                    md:text-[2rem] md:border-[0.2rem]
                    lg:text-[2.5rem] lg:border-[0.3rem]
                    xl:text-[3rem] xl:border-[0.4rem]
                    2xl:text-[4rem] 2xl:border-[0.5rem]
                    hover:border-[#541132] hover:bg-[#e8a9c8] hover:text-[#541132]"
                    onClick={props.easy}>Easy
                </button>
                <button class="mt-[5vw] ml-[4vw] w-[15vw] h-[25vw] bg-[#c5a8e7] text-[#311255]
                    rounded-sm border-[0.05rem] border-[#311255] text-[1rem]
                    sm:text-[1.75rem] sm:border-[0.1rem]
                    md:text-[2rem] md:border-[0.2rem]
                    lg:text-[2.5rem] lg:border-[0.3rem]
                    xl:text-[3rem] xl:border-[0.4rem]
                    2xl:text-[4rem] 2xl:border-[0.5rem]
                    hover:border-[#541132] hover:bg-[#e8a9c8] hover:text-[#541132]"
                    onClick={props.normal}>Normal
                </button>
                <button class="mt-[5vw] ml-[4vw] w-[15vw] h-[25vw] bg-[#c5a8e7] text-[#311255]
                    rounded-sm border-[0.05rem] border-[#311255] text-[1rem]
                    sm:text-[1.75rem] sm:border-[0.1rem]
                    md:text-[2rem] md:border-[0.2rem]
                    lg:text-[2.5rem] lg:border-[0.3rem]
                    xl:text-[3rem] xl:border-[0.4rem]
                    2xl:text-[4rem] 2xl:border-[0.5rem]
                    hover:border-[#541132] hover:bg-[#e8a9c8] hover:text-[#541132]"
                    onClick={props.hard}>Hard
                </button>
                <button class="mt-[5vw] ml-[4vw] w-[15vw] h-[25vw] bg-[#c5a8e7] text-[#311255]
                    rounded-sm border-[0.05rem] border-[#311255] text-[1rem]
                    sm:text-[1.75rem] sm:border-[0.1rem]
                    md:text-[2rem] md:border-[0.2rem]
                    lg:text-[2.5rem] lg:border-[0.3rem]
                    xl:text-[3rem] xl:border-[0.4rem]
                    2xl:text-[4rem] 2xl:border-[0.5rem]
                    hover:border-[#541132] hover:bg-[#e8a9c8] hover:text-[#541132]"
                    onClick={props.insane}>Insane
                </button>
            </div>
            <button class="mt-[2vw] ml-[20vw] w-[36vw] h-[8vw] bg-[#c5a8e7] text-[#311255]
                rounded-sm border-[0.05rem] border-[#311255] text-[1rem]
                sm:text-[1.75rem] sm:border-[0.1rem]
                md:text-[2rem] md:border-[0.2rem]
                lg:text-[2.5rem] lg:border-[0.3rem]
                xl:text-[3rem] xl:border-[0.4rem]
                2xl:text-[4rem] 2xl:border-[0.5rem]
                hover:border-[#541132] hover:bg-[#e8a9c8] hover:text-[#541132]"
                onClick={props.start}>Back
            </button>
        </div>
    )
}

export default DifficultySelect