//setTimeout() allows you to execute st once after an interval
//clearTimeout() method clears a timer set with the setTimeout() method
//setInterval() allows you to execute statements repeatedly after an interval
//clearInterval() method clears a timer ser with the setInterval() method. 
var ID=0;
var sec=0;
var opacity=0;
var IDimg1=0;
var IDimg2=0;

function updateText(){
    document.getElementById("txt").innerHTML="Printing after 5 seconds";
}
function start(){
    ID=window.setTimeout(updateText,5000);//updateText function is referred here after 5 sec it will execute.
}
function stop(){
    window.clearTimeout(ID)//every browser has it's own timer which will take care of the timing schedules everytime setTimeout is called an ID is generated and clearTimeout needs that ID to stop the timer.
}
function updateCount(){
    document.getElementById("sec").innerHTML=sec+" seconds";
    sec++;
}
function sec_count(){
    ID1=window.setInterval(updateCount,1000);
}
function stop_count(){
    window.clearInterval(ID);
}
function fadeIn(){
    IDimg1=setInterval(fade,400);
    
}
function fade(){
    var img=document.getElementById("img1");
    opacity=Number(window.getComputedStyle(img).
    getPropertyValue("opacity"));
    if(opacity>0){
        opacity=opacity-0.1;
        img.style.opacity=opacity;
        console.log(opacity);
    }
    else{
        clearInterval(IDimg1);
    }
}
function fadeOut(){
    IDimg2=setInterval(show,400);
}
function show(){
    var img=document.getElementById("img1");
    opacity=Number(window.getComputedStyle(img).
    getPropertyValue("opacity"));
    if(opacity<1){
        opacity=opacity+0.1;
        img.style.opacity=opacity;
        console.log(opacity);
    }
    else{
        clearInterval(IDimg2);
    }
}

var IDimg3=0;
var IDimg4=0;
var width=100;

function zoomIn(){
    clearInterval(IDimg3);
    IDimg3=setInterval(grow,5);
}
function grow(){
    if(width<200){
        width=width+2;
        //console.log(width);
        document.getElementById("img2").style.width=width+"px";
        console.log(document.getElementById("img2").style.width);
        //console.log(width);
    }
    else{
        clearInterval(IDimg3);
    }
}

function zoomOut(){
    clearInterval(IDimg4);
    IDimg4=setInterval(show,5);
}
function show(){
    
    
    if(width>50){
        width=width-2;
        document.getElementById("img2").style.width=width+"px";
        console.log(width);
    }
    else{
        clearInterval(IDimg4);
    }
}