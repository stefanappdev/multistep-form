
import React, {useState,createContext, useContext } from "react";

 let SidebarContext=createContext();

 const SidebarContextProvider=({children})=>{
    const [step,setStep]=useState(1);

  

    return <SidebarContext.Provider value={{step,setStep}}>
        {children}
    </SidebarContext.Provider>
    }

    const useSidebarContext=()=>{
       return useContext(SidebarContext)
    };

    export {useSidebarContext,SidebarContextProvider};
