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
            <button onClick={toggle} class='m-[1rem] mb-[0px] h-[5vw] w-[90vw] bg-fuchsia-950 text-white text-left border indent-[1rem] hover:text-[#e3c2fc]
                sm:text-[1.5rem]
                md:text-[1.75rem]
                lg:text-[2rem]
                xl:text-[2.5rem]
                2xl:text-[3rem]'>
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