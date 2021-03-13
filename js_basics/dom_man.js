function buttonClick(){
    alert(document.getElementById("heading3").innerHTML);

    document.getElementById("heading3").innerHTML="The button has been clicked!!!";

}

function sumOfNumber(){
    var num=document.getElementById("inputText").value;
    alert("value of the text box is: "+num); 
}
//input box
function logIn(){
    var userId=document.getElementById("userId").value;
    var pass=document.getElementById("pass").value;

    if(userId===pass){
        document.write("<h4>Successfully Logged in!!!</h4>");
    }
    else{
        alert("Sorry try again!!!");
        document.getElementById("userId").value="";
        document.getElementById("pass").value="";
    }
}
//radio button
function selectOp(){
    var op1=document.getElementById("op1");
    var op2=document.getElementById("op2");

    if(op1.checked==true)
        alert("The trophy selected is:"+op1.value);
    else if(op2.checked==true)
        alert("The trophy selected is:"+op2.value);
    else
        alert("no trophy is selected");
}
//dropdown menu
function selectBox(){
    var selectId=document.getElementById("selectId");
    alert(selectId.options[selectId.selectedIndex].value);
}

//tagname
function styleChange(){
    var para=document.getElementsByTagName("p");
    para[0].style.fontSize=30;
    para[1].style.color="red";
    para[2].style.fontWeight="bold";
    para[0].style.fontStyle="italic";
    para[1].style.fontSize=25;

    var conn=document.getElementsByClassName("con");
    conn[0].style.fontWeight="bold";
    conn[0].style.color="blue";

    conn[1].style.fontWeight="bold";
    conn[1].style.color="blue";

}

//image manipulation 
function setNewImage(){
    document.getElementById("img1").src="images/road.jpg";
}
function setOldImage(){
    document.getElementById("img1").src="images/intro.jpg";
}