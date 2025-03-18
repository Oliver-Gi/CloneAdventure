import React from 'react'
import { useState } from 'react'
import "../App.css"

const Story = () =>{
    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open);
    }

    return(
        <div>
            <button onClick={toggle} class='m-[1rem] mb-[0px] w-[90vw] bg-fuchsia-950 text-white text-left border indent-[1rem] hover:text-[#e3c2fc]'>
                Story -&gt;
            </button>
            {
            open && <div class='w-[90vw] mt-[0px] ml-[5vw] mt-[0px] bg-fuchsia-950/75 text-[#e3c2fc]'>
                    <div>
                        <div class="ml-[1rem]"> 
                        As one of Alexavier's four clones, you and your fellow clones have been separated from your host. You'll be navigating the map in an 
                        attempt to reunite with them and return to your daily life. Helpful bonuses, detrimental setbacks, and various opponents await you on 
                        your path.
                        </div>
                    </div>
            </div>}
        </div>
    )
}

export default Story