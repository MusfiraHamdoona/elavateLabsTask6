let btn=document.getElementById("btn");
let name_err=document.getElementById("name_err");
let email_err=document.getElementById("email_err");
let msg_err=document.getElementById("msg_err");
let success_msg=document.getElementById("success_msg");
let names=document.getElementById("name");
let email=document.getElementById("email");
let msg=document.getElementById("msg");
btn.addEventListener("click",(event)=>{
    event.preventDefault();
    
    name_err.textContent = "";
    email_err.textContent = "";
    msg_err.textContent = "";
    success_msg.style.display="none";
    const regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let valid=true;
    if(names.value==""){
       name_err.textContent="Enter your Name";
       valid=false;
       event.preventDefault();
    }
    if(regex.test(email.value)!=true){
     email_err.textContent="Enter valid email";
     valid=false;
     event.preventDefault();
    }
    if(msg.value==""){
        msg_err.textContent="Enter Message";
        valid=false;
        event.preventDefault();
    }
    if(valid){
        success_msg.style.display="block";
        setTimeout(()=>{
            names.value="";
            email.value ="";
            msg.value="";
            success_msg.style.display="none";
        },1000)
        
    }
})
