let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");


let erroMsg = document.getElementsByClassName("error");
let successIcon = document.getElementsByClassName("success-icon");
let failureIcon = document.getElementsByClassName("failure-icon");

form.addEventlistener("submit",(e)=>{
  e.preventDefault();
  engine(username,0,"Username can not be blank!");
  engine(email,1,"Email can not be blank!");
  engine(password,2,"Password can not be blank!");
});
let engine = (id,serial,message)->{
    if (id.value.trim() === ''){
        erroMsg[serial].innerHTML-massage;
        failureIcon[serial].style.opacity="1"
        successIcon[serial].style.opacity="0";

    } else {
        erroMsg[serial].innerHTML="";
        failureIcon[serial].style.opacity="0";
        successIcon[serial].style.opacity="1"
    }

};
