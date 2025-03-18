import React from 'react'
import { useState } from 'react'
import "../App.css"

const Version = () =>{
    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open);
    }

    return(
        <div>
            <button onClick={toggle} class='m-[1rem] mb-[0px] w-[90vw] bg-fuchsia-950 text-white text-left border indent-[1rem] hover:text-[#e3c2fc]'>
                Version Notes -&gt;
            </button>
            {
            open && <div class='w-[90vw] mb-[5vh] mt-[0px] ml-[5vw] mt-[0px] bg-fuchsia-950/75 text-[#e3c2fc]'>
                    <div>
                        <div class="ml-[1rem] pb-[1vh]"> 
                        <strong>17/03/2025</strong><br/><br/>
                        Added functional instruction and story tabs that open on click/tap. Converted version notes section to an openable tab.
                        </div>
                    </div>
            </div>}
        </div>
    )
}

export default Version