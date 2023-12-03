import React,{useState} from 'react'
import "../styles/test.css"
import { Next1, Next2, Next3 } from '../components/Nexts.js'
import { Back1, Back2, Back3} from '../components/Backs.js'
import { useNavigate } from 'react-router-dom'


        


const Application = () => {

  const[isAnnual,setIsAnnual]=useState(false)

const navigate = useNavigate();

const HandleSubmit=(e)=>{
  e.preventDefault()
  navigate("/thanks");
}
 
 let DisplyedFormStyle={
  
  backgroundColor:"rgb(209 213 219)",
  borderRadius:"5px",

 };

 let ProgressbarDivStyle={
  borderRadius:"50%",
  height:"30px",
  width:"30px",
  textAlign:"center"
 }

 let ProgressBarStyle={
  backgroundImage: "url(/images/bg-sidebar-mobile.svg)",
  backgroundImageSize: "cover",
  backgroundImageRepeat: "no-repeat",
  backgroundImagePosition: "center",
 }
  
 let FormInputStyle={
  borderRadius:"5px",
  borderWidth:"2px",
  borderColor:"rgb(30 58 138)"

 }

 let BtnStyle={
  backgroundColor:" rgb(29 78 216)",
  borderRadius:"5px",
  width:"100px",
  height:"35px",
  cursor:"pointer",
 }




  return (
<div>
    
<div id="DISPLAY-CONTAINER"  >
        
       <div   id="progressBar"  >

                  <div className="ml-2" style={ProgressbarDivStyle} >1</div>
                  <span></span>
                  <div className="ml-4" style={ProgressbarDivStyle}>2</div>
                  <span></span>
                  <div className="ml-4" style={ProgressbarDivStyle}>3</div>
                  <span></span>
                  <div className="ml-4" style={ProgressbarDivStyle}>4</div>
                  <span></span>

                </div>
        
        <div id="FORM-CONTAINER"  style={DisplyedFormStyle} className=' p-4 absolute ' >

         

      
          <form id='PERSONAL_INFO' className='p-4 absolute  ' >

              <h1 className=" mb-4 mt-2  text-2xl font-bold">Personal info</h1>

              <div  className="font-thin text-xs mb-4">Please provide your name,email address and phone number</div>
              
              <div className="">
                <label for="name">Name:</label>
                <input style={FormInputStyle} placeholder="e.g. Stephen King" type="text" name='name' id='name'/>
              </div>


              <div className=''>
                <label for="email">Email:</label>
                <input style={FormInputStyle} type="email" placeholder='e.g. StephenKing@example.com' name='email' id='email'/>
              </div>



              <div className=' ' >
                <label for="phone number">phone number:</label>
                <input style={FormInputStyle} type="phone number" placeholder='e.g. +1 234 567 890' name='phone number' id='phone number'/>
              </div>
              
              
              <button style={BtnStyle} onClick={Next1} className='text-white ml-1 mt-4'>NEXT</button>
              
            </form>






              {!isAnnual?<form  id="PLANS-FORM" className='p-4 '  >
              <h1 className=" text-2xl font-bold"> Pick your Plan</h1>
              
               
               
                        <div className="PLANS-FORM-DIV">
                        <img src="/images/icon-arcade.svg" alt="Our Arcade plan" />
                          <h2>Arcade</h2>
                          <span className='monthly-plan-price'>$9/mo</span>
                      
                        </div>


                      <div className="PLANS-FORM-DIV">
                        <img src="/images/icon-advanced.svg" alt="Our advanced plan" />
                        <h2>Advanced</h2>
                          <span className='monthly-plan-price'>$12/mo</span>
                          
                        </div>



                        <div className="PLANS-FORM-DIV" >
                        <img src="/images/icon-pro.svg" alt="Our Pro plan" />
                        <h2>Pro</h2>
                          <span className='monthly-plan-price'>$15/mo</span>
                        </div>

                   
                  
            <div id="toggle-plans">
              <span>monthly</span>
              <img  onClick={()=>setIsAnnual(prev=>!prev)} src={isAnnual?"/images/switch-right.svg":"/images/switch-left.svg"}/>
              <span>annual</span>
            </div>  
              <div className='inline-flex p-4'>
                <button style={BtnStyle} onClick={Back1} class='text-white'>BACK</button>
                <button style={BtnStyle} onClick={Next2} class='text-white  ml-2'>NEXT</button>
              </div>


          </form>
          
          
          
          
          
          :<form  id="PLANS-FORM" className='p-4 '  >
          <h1 className=" text-2xl font-bold"> Pick your Plan</h1>
          
           
           
                    <div className="PLANS-FORM-DIV">
                    <img src="/images/icon-arcade.svg" alt="Our Arcade plan" />
                      <h2>Arcade</h2>
                      <div>$90/yr</div>
                      <span>get 2 months free!</span>
                  
                    </div>


                  <div className="PLANS-FORM-DIV">
                    <img src="/images/icon-advanced.svg" alt="Our advanced plan" />
                    <h2>Advanced</h2>
                      <div>$120/yr</div>
                      <span>get 2 months free!</span>
                      
                    </div>



                    <div className="PLANS-FORM-DIV" >
                    <img src="/images/icon-pro.svg" alt="Our Pro plan" />
                    <h2>Pro</h2>
                      <div>$150/yr</div>
                      <span>get 2 months free!</span>
                    </div>

               
              
        <div id="toggle-plans">
          <span>monthly</span>
          <img  onClick={()=>setIsAnnual(prev=>!prev)} src={isAnnual?"/images/switch-right.svg":"/images/switch-left.svg"}/>
          <span>annual</span>
        </div>  
          <div className='inline-flex p-4'>
            <button style={BtnStyle} onClick={Back1} class='text-white'>BACK</button>
            <button style={BtnStyle} onClick={Next2} class='text-white  ml-2'>NEXT</button>
          </div>


      </form>
      
          
          
          
          
          }






          <form  id="ADDONS-FORM" className='p-4 ' >
              <h1 className=" text-2xl font-bold"> Pick Add-ons</h1>
              <div className="text-gray-200 ">Add-ons help to enhace your gaming experience</div>
              
              <div className="ADDONS-FORM-DIV">
               <input type="checkbox" name='online-service' id='online-service'/>

              <div>
                <h2>Online services</h2>
                <div>Access to multiplayer games</div>
               </div>

               <span>$51/mo</span>

              </div>


              <div className='ADDONS-FORM-DIV'>
              <input type="checkbox" name='larger-storage' id='larger-storage'/>
            
              <div>
                <h2>Larger storage</h2>
                <div>Extra 1TB of cloud storage</div>
              </div>

               <span>$52/mo</span>
              </div>



              <div className='ADDONS-FORM-DIV ' >
              <input type="checkbox" name='customizable-profile' id='customizable-profile'/>

              <div>
               <h2>Customizable profile</h2>
               <div>Custom theme on your profile</div>
              </div>
               <span>$52/mo</span>
              </div>
              
              <div className='inline-flex p-4'>
                <button style={BtnStyle} onClick={Back2}  class='text-white'>BACK</button>
                <button style={BtnStyle} onClick={Next3} class='text-white  ml-2'>NEXT</button>
              </div>


          </form>



          <form onSubmit={HandleSubmit} id="SUMMARY" className='p-4 ' >
              <h1 className="text-2xl font-bold">Finishing Up</h1>
              <span class="SUMMARY-MSG" >Double-check everything looks OK before confirming.</span>
              
              <div className="">
               
              </div>


              <div className=''>
               
              </div>


              <div className=' ' >
               
              </div>

              <div className=' ' >
               
              </div>
              
              <div className='inline-flex p-4'>
                <button style={BtnStyle} onClick={Back3} class='text-white'>BACK</button>
                <button style={BtnStyle}  class='text-white  ml-2'>SUBMIT</button>
              </div>


          </form>
        
       
       

        </div>

    </div>

   

</div>

  
  )
}

export default Application