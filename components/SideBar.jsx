import React,{useState} from 'react'
import "../styles/main.css"
import {UseformContext } from './contexts/formcontext.jsx';

const SideBar=()=> {
    let FC=UseformContext();
    let step=FC.steps;
    

    

    let Sidebarstyle = {
        backgroundImage: "url(/images/bg-sidebar-mobile.svg)",
        backgroundImageSize: "cover",
        backgroundImageRepeat: "no-repeat",
        backgroundImagePosition: "center",
    };

    let bubbles = {
        borderRadius: "50%",
        backgroundColor:"rgb(203 213 225)",
    };

   

    return (
        <React.Fragment>

        <div  id="sidebar-mobile" className="inline-flex flex-row justify-center items-center p-4 gap-4 w-full md:hidden" style={Sidebarstyle}>
            
          
          
            {step===1?<div  className='bubbles text-center h-6 w-6' style={{...bubbles,backgroundColor:"yellow"}}>
                   1
            </div>
                    :
            <div  className='bubbles text-center h-6 w-6' style={bubbles}>
                1
            </div>    
                
                }


            {step===2?<div  className='bubbles text-center h-6 w-6' style={{...bubbles,backgroundColor:"yellow"}}>
                  2
            </div>
                    :
            <div  className='bubbles text-center h-6 w-6' style={bubbles}>
                2
            </div>    
                
                }


            {step===3?<div  className='bubbles text-center h-6 w-6' style={{...bubbles,backgroundColor:"yellow"}}>
                   3
            </div>
                    :
            <div  className='bubbles text-center h-6 w-6' style={bubbles}>
                3
            </div>    
                
                }


             {step===4?<div  className='bubbles text-center h-6 w-6' style={{...bubbles,backgroundColor:"yellow"}}>
                   4
            </div>
                    :
            <div  className='bubbles text-center h-6 w-6' style={bubbles}>
                4
            </div>    
                
                }
        </div>




       

      </React.Fragment>
      )
}

export default SideBar