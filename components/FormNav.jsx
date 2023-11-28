import React from 'react'
import {useNavigate} from 'react-router-dom'
import { UseformContext, } from './contexts/formcontext'

const FormNav = () => {
  let FC=UseformContext();
  let step=FC.step;
  let shouldSubmit=FC.shouldSubmit;
  let navigate=useNavigate();

  let btnstyle={
    borderRadius:"5px",
    width:"100px"
  }

  const stepUp=()=>{

    FC.setStep(prev=>prev+1);
  }

  const stepDown=()=>{

    FC.setStep(prev=>prev-1);
    navigate(-1);
  }

  const SubmitPersonalInfo=()=>{

      stepUp();
      navigate("/plans");

    }


  const SubmitPlans=()=>{

      stepUp();
      navigate("/addons");

    }

    const SubmitAddons=()=>{
  
        stepUp();
        navigate("/finish");
  
      }


      const Finish=()=>{
    
          stepUp();
          navigate("/thanks");
    
        }
  
   

  return (
    <div>

      {step===1?shouldSubmit===false?
      <button disabled style={btnstyle} 
        className="p-4 mt-4 ml-4 text-white bg-gray-400">Next </button>
            :
      <button className="submit-btn p-4 ml-4 mt-4 text-white  bg-sky-500" 
            onClick={SubmitPersonalInfo} style={btnstyle} >Next </button>:""
      }

      {step===2?shouldSubmit===false?
      <div>
      <button className="submit-btn p-4 ml-4 mt-4  text-white bg-sky-500 " 
      style={btnstyle}  onClick={stepDown}>Back</button>

      <button className="submit-btn p-4 ml-4 mt-4 text-white bg-gray-400" style={btnstyle} 
      disabled>Next Step</button>
      </div>

        :<div>
          <button className="submit-btn p-4 ml-4 mt-4 text-white bg-sky-500" style={btnstyle} 
          onClick={stepDown}>Back</button>
          <button className="submit-btn p-4  ml-4 mt-4 text-white bg-gray-400" style={btnstyle} 
          onClick={SubmitPlans}>Next </button>
          </div>
        :""
          
      }

    {step===3?shouldSubmit===false?
    
        
        <div>
          <button className="submit-btn p-4 mt-4 ml-4 text-white bg-sky-500" 
            style={btnstyle} 
           onClick={stepDown}>Back</button>

          <button className="submit-btn p-4 mt-4 ml-4 text-white bg-gray-400" 
          style={btnstyle} 
          disabled>Next</button>
        </div>
        :
        <div>
          <button className="submit-btn p-4 mt-4 ml-4 text-white bg-sky-500" 
          style={btnstyle}  onClick={stepDown}>Back</button>

          <button className="submit-btn p-4 mt-4 ml-4  text-white bg-sky-500" style={btnstyle} 
          onClick={SubmitAddons}>Next </button>
        </div>

        :""
      }

      {step===4?shouldSubmit===false?
        <div>
              <button className="submit-btn p-4 mt-4 ml-4 text-white bg-sky-500" 
              style={btnstyle} onClick={stepDown}>Back</button>

              <button className="submit-btn p-4 mt-4 ml-4  text-white bg-gray-400" 
              style={btnstyle}  disabled>Next </button>
            </div>
      
          :<div>
          <button className="submit-btn p-4 mt-4 ml-4 text-white bg-sky-500" 
          style={btnstyle}  onClick={stepDown}>Back</button>

          <button className="submit-btn p-4 mt-4 ml-4 text-white bg-sky-500" style={btnstyle} 
          onClick={Finish}>Next </button>
          </div>
          :""
          
          
      }


  </div>
  )




}

export default FormNav