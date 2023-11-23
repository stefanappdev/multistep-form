import React,{useState} from 'react'
import SideBar from './components/SideBar.jsx'
import {useSidebarContext} from './components/contexts/sidebarcontext.jsx'

const Application = () => {
  
  let SC=useSidebarContext();
 
  
  

  const Update=()=>{
     
     SC.setStep(prevstep=>prevstep+1);
  }

  const checkStep=()=>{
    return SC.step;
  }



  return (
    <React.Fragment>
      <SideBar />

     
    {checkStep()===4?<button  onClick={Update} disabled>next step</button>:<button onClick={Update}>next step</button>}
    <p>{checkStep()===4?"you have reached the end of the form":`you are at step ${checkStep()}` }</p>
    </React.Fragment>

  )
}

export default Application