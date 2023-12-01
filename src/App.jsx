import React from 'react'
import { FormContextProvider } from '../components/contexts/formcontext.jsx'
import "../styles/test.css"
import { Next1, Next2, Next3, Finish } from '../components/Nexts.js'
import { Back1, Back2, Back3} from '../components/Backs.js'

const App = () => {
 
 let DisplyedFormStyle={
  height:"450px",
  width:"min-content",
  backgroundColor:"rgb(209 213 219)",
  borderRadius:"5px",

 };

 let ProgressbarDivStyle={
  borderRadius:"50%",
  backgroundColor:"gray",
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
  height:"35px"
 }




  return (

    
    <div  className='flex flex-col justify-center relative items-center px-2 py-4  ' >
        
      
        
        <div id="FORM-CONTAINER"  style={DisplyedFormStyle} className=' p-4 absolute ' >

          <div  style={ProgressBarStyle}id="progressBar-mobile" 
          className=' px-4 py-2 inline-flex justify-center items-center absolute w-full' >

                  <div className="ml-2" style={ProgressbarDivStyle}>1</div>
                  <div className="ml-4" style={ProgressbarDivStyle}>2</div>
                  <div className="ml-4" style={ProgressbarDivStyle}>3</div>
                  <div className="ml-4" style={ProgressbarDivStyle}>4</div>

                </div>

      
          <form id='PERSONAL_INFO' className='p-4 absolute  ' >

              <h1 className=" mb-4 mt-2  text-2xl font-bold">Personal info</h1>

              <div  className="font-thin text-xs mb-4">Please provide your name,email address and phone number</div>
              
              <div className="">
                <label for="name">Name:</label>
                <input style={FormInputStyle} type="text" name='name' id='name'/>
              </div>


              <div className=''>
                <label for="email">Email:</label>
                <input style={FormInputStyle} type="email" name='email' id='email'/>
              </div>



              <div className=' ' >
                <label for="phone number">phone number:</label>
                <input style={FormInputStyle} type="phone number" name='phone number' id='phone number'/>
              </div>
              
              
              <button style={BtnStyle} onClick={Next1} className='text-white ml-1 mt-4'>NEXT</button>
              
            </form>






              <form  id="PLANS-FORM" className='p-4 '  >
              <h1 className=" text-2xl font-bold"> Pick your Plan</h1>
              <span className="text-gray-200 ">Please provide your name,email address and phone number</span>
              
              <div className="">
                <label for="name">Name:</label>
                <input type="text" name='name' id='name'/>
              </div>


              <div className=''>
                <label for="email">Email:</label>
                <input type="email" name='email' id='email'/>
              </div>



              <div className=' ' >
                <label for="phone number">phone number:</label>
                <input type="phone number" name='phone number' id='phone number'/>
              </div>
              
              <div className='inline-flex p-4'>
                <button style={BtnStyle} onClick={Back1} class='text-white'>BACK</button>
                <button style={BtnStyle} onClick={Next2} class='text-white  ml-2'>NEXT</button>
              </div>


          </form>






          <form  id="ADDONS-FORM" className='p-4 ' >
              <h1 className=" text-2xl font-bold">Add-ons</h1>
              <span className="text-gray-200 ">Please provide your name,email address and phone number</span>
              
              <div className="">
                <label for="name">Name:</label>
                <input type="text" name='name' id='name'/>
              </div>


              <div className=''>
                <label for="email">Email:</label>
                <input type="email" name='email' id='email'/>
              </div>



              <div className=' ' >
                <label for="phone number">phone number:</label>
                <input type="phone number" name='phone number' id='phone number'/>
              </div>
              
              <div className='inline-flex p-4'>
                <button style={BtnStyle} onClick={Back2}  class='text-white'>Back</button>
                <button style={BtnStyle} onClick={Next3} class='text-white  ml-2'>Next</button>
              </div>


          </form>



          <form  id="SUMMARY" className='p-4 ' >
              <h1 className="text-2xl font-bold">SUMMARY</h1>
              <span className="text-gray-200 ">Please provide your name,email address and phone number</span>
              
              <div className="">
                <label for="name">Name:</label>
                <input type="text" name='name' id='name'/>
              </div>


              <div className=''>
                <label for="email">Email:</label>
                <input type="email" name='email' id='email'/>
              </div>



              <div className=' ' >
                <label for="phone number">phone number:</label>
                <input type="phone number" name='phone number' id='phone number'/>
              </div>
              
              <div className='inline-flex p-4'>
                <button style={BtnStyle} onClick={Back3} class='text-white'>BACK</button>
                <button style={BtnStyle} onClick={Finish} type="submit" class='text-white  ml-2'>SUBMIT</button>
              </div>


          </form>
        
       


        </div>



        


    </div>
  
  )
}

export default App