import React from 'react'
import "../styles/App.css"

const SideBar=()=> {
    let Sidebarstyle = {
        backgroundImage: "url(/images/bg-sidebar-mobile.svg)",
        backgroundImageSize: "cover",
        backgroundImageRepeat: "no-repeat",
        backgroundImagePosition: "center",
    };

    let bubbles = {
        borderRadius: "50%",
        backgroundColor: "rgb(203 213 225)",
    };



    return (
        <React.Fragment>

        <div  id="sidebar-mobile" class="inline-flex flex-row justify-center items-center p-4 gap-4 w-full md:hidden" style={Sidebarstyle}>
            
            <div id="step 1" className='bubbles text-center h-6 w-6' style={bubbles}>
                1
            </div>

            <div  id="step 2" className='bubbles text-center h-6 w-6 ml-2' style={bubbles}>
                2
            </div>

            <div id="step 3" className='bubbles text-center h-6 w-6 ml-2' style={bubbles}>
               3
            </div>

            <div  id="step 4" className='bubbles  text-center h-6 w-6 ml-2' style={bubbles}>
              
              4
            </div>
        </div>

       

      </React.Fragment>
      )
}

export default SideBar