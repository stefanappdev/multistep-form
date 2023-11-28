import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UseformContext } from './contexts/formcontext.jsx';

const Plans = () => {
  let navigate=useNavigate();
  let FC=UseformContext();

  const[planType,setplanType]=React.useState(null);
  const[isannualplan,setannualplan]=React.useState(false);

  let imgstyle={
    width:"120px",
    height:"80px"
  }

  let planDivStyle={
    border:"3px solid darkblue",
    borderRadius:"5px",
    width:"300px",
    textAlign:"center",
    backgroundColor:"white"
  
  }

 


  const planperiodHandler=()=>{
    setannualplan(prev=>!prev);
  }

  const planTypeHandler=(type)=>{
    setplanType(type);
  }  

  const handleMouseEnter=(e)=>{
    e.target.style.backgroundColor="#A0B2CE";
  }

  const handleMouseLeave=(e)=>{
    e.target.style.backgroundColor="white";
  }
  const displayPlans=()=>{
    if(planType!=="" && planType!==null){

      if(isannualplan){
       //setplanSelected(true); 
       return `Selected plan: ${planType} Annual`

      }
      else{
        //setplanSelected(true);
        return `Selected plan: ${planType} Monthly`
      }
    }

  }

  return (
    
   
    <div id="plans" className='flex flex-col gap-4 bg-gray-200 justify-center items-center'>
          
          <h1 className=' font-bold text-3xl  text-center'>Select your plan</h1>
        
      {
      isannualplan?<div className='flex flex-col  justify-center items-center' id="annual-plans">
        <h3 className='p-4 text-2xl text-center font-semibold'> Our Annual Plans</h3>

        <div  className= ' p-4 inline-flex gap-2 items-center ' onMouseLeave={handleMouseLeave} 
        onMouseEnter={handleMouseEnter} style={planDivStyle} onClick={()=>planTypeHandler("arcade")}>
          <img src="/images/icon-arcade.svg" alt="arcade plan" style={{...imgstyle,width:"50px"}}/>
          <span className='font-semibold  text-xl'> Arcade:$90/yr</span> 
        </div>
        
        <div className='p-4 mt-4  inline-flex gap-2 items-center' onMouseLeave={handleMouseLeave} 
        onMouseEnter={handleMouseEnter} style={planDivStyle} onClick={()=>planTypeHandler("advanced")}>
          <img src="/images/icon-advanced.svg" alt="advanced plan" style={{...imgstyle,width:"50px"}}/>
          <span className='font-semibold text-xl'>Advanced:$120/yr</span>
        </div>

        <div className='p-4 mt-4 inline-flex gap-2 items-center' onMouseLeave={handleMouseLeave} 
        onMouseEnter={handleMouseEnter} style={planDivStyle} onClick={()=>planTypeHandler("pro")}>
          <img src="/images/icon-pro.svg" alt="pro plan" style={{...imgstyle,width:"50px"}}/>
          <span className='font-semibold text-xl' > Pro:$150/yr</span>
          
        </div>

      



    

    

      </div>:

      <div className='flex flex-col  justify-center items-center' id="monthly-plans">
        <h3 className='p-4 text-2xl text-center font-semibold'> Our monthly Plans</h3>

        <div  className= ' p-4 inline-flex gap-2 items-center ' onMouseLeave={handleMouseLeave} 
        onMouseEnter={handleMouseEnter} style={planDivStyle} onClick={()=>planTypeHandler("arcade")}>
          <img src="/images/icon-arcade.svg" alt="arcade plan" style={{...imgstyle,width:"50px"}}/>
          <span className='font-semibold  text-xl'> Arcade:$9/mo</span> 
        </div>

        <div className='p-4 mt-4  inline-flex gap-2 items-center' onMouseLeave={handleMouseLeave} 
        onMouseEnter={handleMouseEnter} style={planDivStyle} onClick={()=>planTypeHandler("advanced")}>
          <img src="/images/icon-advanced.svg" alt="advanced plan" style={{...imgstyle,width:"50px"}}/>
          <span className='font-semibold text-xl'>Advanced:$12/mo</span>
        </div>

        <div className='p-4 mt-4 inline-flex gap-2 items-center' 
        onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} style={planDivStyle} 
        onClick={()=>planTypeHandler("pro")}>
          <img src="/images/icon-pro.svg" alt="pro plan" style={{...imgstyle,width:"50px"}}/>
          <span className='font-semibold text-xl' > Pro:$15/mo</span>
        </div>

        <span className='font-semibold mt-4 text-xl text-green-800' >*Get 2 Months free off any plan</span>

        

      </div>
      }
    
    
    <div id="plans-display" className=' flex flex-col justify-center items-center pl-8 py-2 mr-12 text-center text-lg  font-extrabold'>{displayPlans()}</div>

    <div id="plan-switch" className='inline-flex p-4 ml-4 justify-center flex-row items-center'>
      <span className='font-semibold'>Monthly</span>
      <img style={imgstyle} src={isannualplan?"/images/switch-right.svg":"/images/switch-left.svg"} alt="switch your plan" onClick={planperiodHandler}/>
    <span className='font-semibold'>yearly</span>
    </div>
  </div>
  )
}

export default Plans