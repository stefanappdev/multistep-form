import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSidebarContext } from './contexts/sidebarcontext.jsx';

const Plans = () => {
  let navigate=useNavigate();
  let SC=useSidebarContext();

  const[planType,setplanType]=React.useState(null);
  const[isannualplan,setannualplan]=React.useState(false);

  let imgstyle={
    width:"120px",
    height:"80px"
  }

  let btnstyle={
    borderRadius:"5px",
    width:"100px"
  }

  const Previous=()=>{
    navigate(-1);
    SC.setStep(prev=>prev-1);

  }
  
  const Next=()=>{
    SC.setStep(prev=>prev+1);
    navigate("/addons");
  }


  const planperiodHandler=()=>{
    setannualplan(prev=>!prev);
  }

  const planTypeHandler=(type)=>{
    setplanType(type);
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
    <React.Fragment>
   
    
        
        <h1 className=' font-bold text-3xl  text-center'>Select your plan</h1>
      
    {
    isannualplan?<div className='flex flex-col  justify-center items-center' id="annual-plans">
      <h3 className='p-4 text-2xl text-center font-semibold'> Our Annual Plans</h3>

      <div  onClick={()=>planTypeHandler("arcade")}>
       
        <span className='font-semibold text-xl'> Arcade:$90/yr</span>
        <br/>
        
      </div>
      
      <div className='p-5 ml-2' onClick={()=>planTypeHandler("advanced")}>
        
        <span className='font-semibold text-xl'>Advanced:$120/yr</span>
        <br/>
           
      </div>

      <div className='p-4 mb-4' onClick={()=>planTypeHandler("pro")}>
       
        <span className='font-semibold text-xl' > Pro:$150/yr</span>
        <br/>
        
      </div>

     



      <div className='inline-flex flex-row  mb-6 justify-center'>
   
    {planType?<button className='p-4 mr-12 mt-4 text-white  bg-sky-500' style={btnstyle} onClick={Previous}>Back</button>:
    <button style={btnstyle} className="p-4 mr-12 mt-4 text-white bg-gray-400" disabled onClick={Previous}>Back</button>}




    {planType?<button className="p-4  mt-4 text-white  bg-sky-500" style={btnstyle} onClick={Next}>Next</button>:
    <button style={btnstyle} className="p-4 mt-4 text-white bg-gray-400" disabled onClick={Next}>Next</button>}
   </div>

  

    </div>:

     <div className='flex flex-col  justify-center items-center' id="monthly-plans">
      <h3 className='p-4 text-2xl text-center font-semibold'> Our monthly Plans</h3>
      <div className='p-4' onClick={()=>planTypeHandler("arcade")}>
       
        <span className='font-semibold text-xl'> Arcade:$9/mo</span>
      </div>

      <div className='p-4 mt-2' onClick={()=>planTypeHandler("advanced")}>
        
        <span className='font-semibold text-xl'>Advanced:$12/mo</span>
      </div>

      <div className='p-4 mb-4' onClick={()=>planTypeHandler("pro")}>
       
        <span className='font-semibold text-xl' > Pro:$15/mo</span>
      </div>

      <span className='font-semibold text-xl mb-4 text-green-800' >*Get 2 Months free off any plan</span>

    <div className='inline-flex flex-row mb-6 justify-center'>

    {planType?<button className='p-4 mr-12 mt-4  text-white  bg-sky-500' style={btnstyle} onClick={Previous}>Back</button>:
    <button style={btnstyle} className="p-4 mr-12 mt-4 text-white bg-gray-400" disabled onClick={Previous}>Back</button>}




    {planType?<button className="p-4  mt-4 text-white  bg-sky-500" style={btnstyle} onClick={Next}>Next</button>:
    <button style={btnstyle} className="p-4 mt-4 text-white bg-gray-400" disabled onClick={Next}>Next</button>}
   </div>

    </div>
    }
   
  
   <div id="plans-display" className=' flex flex-col justify-center items-center pl-8 py-2 mr-12 text-center text-lg  font-extrabold'>{displayPlans()}</div>

   <div id="plan-switch" className='inline-flex p-4 ml-4 justify-center flex-row items-center'>
    <span className='font-semibold'>Monthly</span>
    <img style={imgstyle} src={isannualplan?"/images/switch-right.svg":"/images/switch-left.svg"} onClick={planperiodHandler}/>
   <span className='font-semibold'>yearly</span>
  </div>


    </React.Fragment>
  )
}

export default Plans