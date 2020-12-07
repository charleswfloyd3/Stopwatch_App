function signupandlogin(){
    if(document.getElementById("signupmodal").style.display = "none"){
    document.getElementById("signupmodal").style.display = "initial";
    document.getElementById("loginmodal").style.display = "initial";
    document.getElementById("body").style.opacity = "50%";
    }
}
function submit(){
    document.getElementById("signupmodal").style.display = "none";
    document.getElementById("loginmodal").style.display = "none";
    document.getElementById("body").style.opacity = "100%";
}