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
            <button onClick={toggle} class='m-[1rem] mb-[1vw] h-[5vw] w-[90vw] bg-fuchsia-950 text-white text-left border indent-[1rem] hover:text-[#e3c2fc]
                sm:text-[1.5rem]
                md:text-[1.75rem]
                lg:text-[2rem]
                xl:text-[2.5rem]
                2xl:text-[3rem]'>
                Version Notes -&gt;
            </button>
            {
            open && <div class='w-[90vw] mb-[5vh] mt-[0px] ml-[5vw] mt-[0px] bg-fuchsia-950/75 text-[#e3c2fc]'>
                    <div>
                        <div class="ml-[1rem] pb-[1vh]"> 
                        <strong>12/06/2025</strong><br/><br/>
                        - Designed character description screen.<br/>
                        - Buttons will redirect to information screens about their relative character in future.<br/>
                        - Back button moves you back to difficulty screen.<br/>
                        - Next button will move you to map screen in future.<br/>
                        - Changed the information tabs to scale with screen size.<br/>
                        - Fixed a UI bug that allowed the buttons on the difficulty screen to exceed background size.
                        <br/><br/>
                        <strong>NEXT STEPS:</strong><br/>
                        - Design and implement character information screens.<br/>
                        - Make 'next' button change screen to relevant map screen.<br/>
                        - Design and implement map screens.<br/>
                        </div>
                    </div>
            </div>}
        </div>
    )
}

export default Version