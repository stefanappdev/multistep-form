//file to create functions for back buttons


//Go back from Plans to Personal Info
const Back1=(e)=>{
    e.preventDefault()
    let PersonalInfoForm=document.querySelector("#PERSONAL_INFO");
    let PLANSFORM=document.querySelector("#PLANS-FORM");
    PLANSFORM.style.position="absolute"; 
    PLANSFORM.style.left="-200px";
    PersonalInfoForm.style.left="280px";  
    PersonalInfoForm.style.position="static";
    let ProgressBarStep2=document.querySelector("#progressBar div:nth-of-type(2)");
    ProgressBarStep2.style.backgroundColor="grey";
    PersonalInfoForm.style.visibility="visible";
   PLANSFORM.style.visibility="hidden";
}

//Go back from Addons to Plans

const Back2=(e)=>{
    e.preventDefault()
    let PLANSFORM=document.querySelector("#PLANS-FORM");
    let ADDONSFORM=document.querySelector("#ADDONS-FORM");
    
    ADDONSFORM.style.position="absolute"; 
    ADDONSFORM.style.left="-200px"; 
    PLANSFORM.style.left="280px"; 
    PLANSFORM.style.position="static";
    let ProgressBarStep3=document.querySelector("#progressBar div:nth-of-type(3)");
    ProgressBarStep3.style.backgroundColor="grey";
   PLANSFORM.style.visibility="visible";
    ADDONSFORM.style.visibility="hidden";
}

//Go back from Summary to Addons
const Back3=(e)=>{
    e.preventDefault()
    let SUMMARY=document.querySelector("#SUMMARY");
    let ADDONSFORM=document.querySelector("#ADDONS-FORM");

    SUMMARY.style.position="absolute";
    SUMMARY.style.left="-200px";
    ADDONSFORM.style.left="280px";  
    ADDONSFORM.style.position="static";
    let ProgressBarStep4=document.querySelector("#progressBar div:nth-of-type(4)");
    ProgressBarStep4.style.backgroundColor="grey";
    SUMMARY.style.visibility="hidden";
    ADDONSFORM.style.visibility="visible";
}




export{Back1,Back2,Back3}