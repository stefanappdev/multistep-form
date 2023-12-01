//file to create functions for back buttons


const Next1=(e)=>{
    e.preventDefault()
    let PersonalInfoForm=document.querySelector("#PERSONAL_INFO");
    let PLANSFORM=document.querySelector("#PLANS-FORM");
    PersonalInfoForm.style.position="absolute"; 
    PersonalInfoForm.style.left="-200px";  
    PLANSFORM.style.left="280px";
    PLANSFORM.style.position="static";
}

const Next2=(e)=>{
    e.preventDefault()
    let PLANSFORM=document.querySelector("#PLANS-FORM");
    let ADDONSFORM=document.querySelector("#ADDONS-FORM");
    PLANSFORM.style.position="absolute";
    PLANSFORM.style.left="-200px";    
    ADDONSFORM.style.left="280px";
    ADDONSFORM.style.position="static";
}

const Next3=(e)=>{
    e.preventDefault()
    let SUMMARY=document.querySelector("#SUMMARY");
    let ADDONSFORM=document.querySelector("#ADDONS-FORM");
    ADDONSFORM.style.position="absolute";
    ADDONSFORM.style.left="-200px"; 
    SUMMARY.style.left="280px";
    SUMMARY.style.position="static";
}

const Finish=(e)=>{
    e.preventDefault()
    let SUMMARY=document.querySelector("#SUMMARY");
    let ADDONSFORM=document.querySelector("#ADDONS-FORM");
    ADDONSFORM.style.position="absolute";
    ADDONSFORM.style.left="-200px"; 
    SUMMARY.style.left="280px";
    SUMMARY.style.position="static";
}



export{Next1,Next2,Next3,Finish}