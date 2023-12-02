//file to create functions for back buttons





const Next1=(e)=>{
    e.preventDefault()
    let PersonalInfoForm=document.querySelector("#PERSONAL_INFO");
    let PLANSFORM=document.querySelector("#PLANS-FORM");
    let ProgressBarStep2=document.querySelector("#progressBar div:nth-of-type(2)");
   
    PersonalInfoForm.style.position="absolute"; 
    PersonalInfoForm.style.left="-200px";  
    PLANSFORM.style.left="280px";
    PLANSFORM.style.position="static";
    PLANSFORM.style.visibility="visible";
    PersonalInfoForm.style.visibility="hidden";
    ProgressBarStep2.style.backgroundColor="yellow";
 

}

const Next2=(e)=>{
    e.preventDefault()
    let PLANSFORM=document.querySelector("#PLANS-FORM");
    let ADDONSFORM=document.querySelector("#ADDONS-FORM");
    PLANSFORM.style.position="absolute";
    PLANSFORM.style.left="-200px";    
    ADDONSFORM.style.left="280px";
    ADDONSFORM.style.position="static";
    ADDONSFORM.style.visibility="visible";
    PLANSFORM.style.visibility="hidden";
    let ProgressBarStep3=document.querySelector("#progressBar div:nth-of-type(3)");
    ProgressBarStep3.style.backgroundColor="yellow";
 
    
}

const Next3=(e)=>{
    e.preventDefault()
    let SUMMARY=document.querySelector("#SUMMARY");
    let ADDONSFORM=document.querySelector("#ADDONS-FORM");
    ADDONSFORM.style.position="absolute";
    ADDONSFORM.style.left="-200px"; 
    SUMMARY.style.left="280px";
    SUMMARY.style.position="static";
    SUMMARY.style.visibility="visible";
    ADDONSFORM.style.visibility="hidden";
    let ProgressBarStep4=document.querySelector("#progressBar div:nth-of-type(4)");
    ProgressBarStep4.style.backgroundColor="yellow";
}




export{Next1,Next2,Next3}