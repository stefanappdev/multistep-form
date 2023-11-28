
import React, {useState,createContext, useContext } from "react";

 let formContext=createContext();

 const FormContextProvider=({children})=>{
    const [step,setStep]=useState(1);

  

    return <formContext.Provider value={{step,setStep}}>
        {children}
    </formContext.Provider>
    }

    const UseformContext=()=>{
       return useContext(formContext)
    };

    export {UseformContext,FormContextProvider};
