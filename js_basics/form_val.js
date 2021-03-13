function validate(){
    var userId=document.getElementById("username");
    var pass=document.getElementById("password");
    console.log(userId.value);
    if(userId.value.trim()==""){
        //alert("Please enter a userId");
        userId.style.border="solid 2px red";
        document.getElementById("visu").style.visibility="visible";
        return false;
    } 
    else if(pass.value.trim()==""){
        pass.style.border="solid 2px red";
        document.getElementById("visp").style.visibility="visible";
        //alert("Please enter a password");
        return false;
    }
    else if(pass.value.trim().length<5){
        pass.style.border="solid 2px red";
        document.getElementById("visp").style.visibility="visible";
        //alert("Please enter a password");
        return false;
    }
    else{
        return true;
    }
}