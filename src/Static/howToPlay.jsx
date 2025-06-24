import React from 'react'
import { useState } from 'react'
import "../App.css"

const Instructions = () =>{
    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open);
    }

    return(
        <div>
            <button onClick={toggle} class='m-[1rem] mb-[0px] w-[90vw] bg-fuchsia-950 text-white text-left border indent-[1rem] hover:text-[#e3c2fc]
                sm:text-[1.5rem]
                md:text-[1.75rem]
                lg:text-[2rem]
                xl:text-[2.5rem]
                2xl:text-[3rem]'>
                Instructions -&gt;
            </button>
            {
            open && <div class='w-[90vw] mt-[0px] ml-[5vw] mt-[0px] bg-fuchsia-950/75 text-[#e3c2fc]'>
                    <div>
                        <div class="ml-[1rem]"> 
                            <strong>Menu Navigation:</strong><br/>To navigate through the menues, tap or click the buttons relating to what you wish to do. 
                            (i.e. Clicking the start button will bring you from the title page to the first settings page for the game.)<br/><br/>

                            <strong>Battle Keybinds:</strong><br/>During a battle, you are able to either press/click directly on the move you would like to use
                            or if on computer, press the relative keybind. (Q for special ability, E for main attack)<br/>
                        </div>
                    </div>
            </div>}
        </div>
    )
}

export default Instructions