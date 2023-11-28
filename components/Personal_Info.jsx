import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { UseformContext } from './contexts/formcontext'
import "../styles/main.css"


const Personal_Info = () => {
  let navigate=useNavigate();
  let btnstyle={
    borderRadius:"5px",
    width:"100px"
  }
  
  const [form,setForm]=useState({
    name:"",
    email:"",
    phone:""
  });




  
  const handleSubmit=(e)=>{
    e.preventDefault();
    SC.setStep(prev=>prev+1);
    navigate("/plans");  
  }
  
  function isValidPhoneNumber(phonenumber) {

    //Source:GeekforGeeks

    // Regex to check valid
    // International Phone Numbers
    let regex = new RegExp(/^[+]{1}(?:[0-9\-\(\)\/\.]\s?){6, 15}[0-9]{1}$/);
 
    // if phonenumber
    // is empty return false
    if (phonenumber == null) {
        return "false";
    }
 
    // Return true if the phonenumber
    // matched the ReGex
    if (regex.test(phonenumber) == true) {
        return "true";
    }
    else {
        return "false";
    }
}
  

  let email_error=form.email===""?"Email cannot be empty":"";
  let name_error=form.name!=""&&form.name.length>=8?"":"Name cannot be empty or less than 8 characters";
  let phone_error=form.phone!=""&&isValidPhoneNumber(form.phone)?"":" Phone number is empty or is invalid  ";
  let errs=[email_error,name_error,phone_error];
  return (
   
        
        <div id="personal-info" className='flex p-4 mt-4 bg-gray-300 flex-col justify-center items-center'>
        
          <h1 class="p-4 text-2xl font-bold">Personal Info</h1>

          <span class="p-4 text-lg font-semibold">Please provide your name,email and phone number</span>

          <form class="p-4 h-full" onSubmit={handleSubmit}>
              <label class="font-semibold" for="name">Name:</label>
              <input  type="text" id="name" name="name" onChange={(e)=>setForm({...form,name:e.target.value})} value={form.name} placeholder=" e.g John Smith" required/>
              <p className='text-red-500'>{name_error}</p>
                  
            

              <label class='font-semibold' for="email">Email Address:</label>
              <input className='mt-4 font-semibold' type="email" id="email" name="email" onChange={(e)=>setForm({...form,email:e.target.value})} value={form.email} placeholder=" e.g JSmith@example.com" required/>
              <p className='text-red-500'>{email_error}</p>

              <label class='font-semibold' for="phone">Phone Number:</label>
              <input class='mt-4 mb-4 font-semibold' type="text" id="phone" name="phone" value={form.phone} onChange={(e)=>setForm({...form,phone:e.target.value})} placeholder=" e.g 123 456 7890" required/>
              <p className='text-red-500 '>{phone_error}</p>

              {errs.every(err=>err==="")
              ?<button style={btnstyle} className="p-4  mt-4 text-white  bg-sky-500" type='submit'>Next</button>
              
              :
              
              <button disabled  style={btnstyle} className="p-4 mt-4 text-white bg-gray-400" type='submit'>Next</button>}
            
            
          </form>

        </div>


  )
}

export default Personal_Info