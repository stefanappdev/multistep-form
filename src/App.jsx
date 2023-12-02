import React from "react";
import Application from "./Application.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { FormContextProvider } from "../components/contexts/formcontext.jsx";
import  Thanks  from '../components/Thanks.jsx'
import { Routes, Route } from "react-router-dom";

const App=()=>{

  return(
   <FormContextProvider> 
      <Router> 
          
        <Routes>
          <Route path="/" element={<Application />} />
            <Route path="/thanks" element={<Thanks />} />
        </Routes>

        
      </Router> 
    </FormContextProvider>
  )
}


export default App