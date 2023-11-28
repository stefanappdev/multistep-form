
import React, {useState,createContext, useContext } from "react";

 let formContext=createContext();

 const FormContextProvider=({children})=>{
    const [step,setStep]=useState(1);
    const[shouldSubmit,setshouldSubmit]=useState(false);

  

    return <formContext.Provider value={{shouldSubmit,setshouldSubmit,step,setStep}}>
        {children}
    </formContext.Provider>
    }

    const UseformContext=()=>{
       return useContext(formContext)
    };

    export {UseformContext,FormContextProvider};
