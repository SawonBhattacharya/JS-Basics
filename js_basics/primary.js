//javascript is loosely type and dynamic type programming language
//initial char $/_/letter not number
var num1=16;
var nam="Sawon Bhattacharya";
var num2=20;
var num3=nam+num1+num2;
var flag=true;//boolean
document.write("<h1>Hello fucking world!!!</h1>");
document.write("<h3><b>If Else statement </b></h3>")

if(num3>0 && num3%2===0){
    document.write("<h4>Positive Even</h4>")
}
else if(num3>0 && num3%2!==0){
    document.write("<h4>Positive Odd</h4>")
}
else{
    document.write("<h4>Not a positive number</h4>")
}
//alert(num);
//js supports number string and boolean values as switch case values and also expressions

document.write("<h3><b>FOR LOOP</b></h3>")
var x=19;
for(var i=0;i<=10;i++){
    document.write("<h5><i>"+x+" * "+i+" = "+x*i+"</i></h5>");
}

document.write("<h3><b>WHILE LOOP</b></h3>")
var x=12
var s=0;
var r=0;
var y=x;
while(x>0){
    r=x%10;
    s=s+r;
    x=parseInt(x/10);//parseInt to get integer portion
}
document.write("<h3><b>sum of"+ y+" is "+s+"</b></h3>")

document.write("<h3><b>FUNCTION</b></h3>")

function sum(a,b){
    return (a+b);
}

document.write("<h3>sum of two numbers are: "+sum(num1,num2)+" </h3>");

//scope of variables
//local and global
document.write("<h3>Arrays</h3>");
var player=["virat","Rohit","Pandya","Ashwin","Pujara"];
var fruits=new Array("mango","banana","grapes","strawberry");
player.push("Pant");
for(i in player){
    document.write("<h4>"+player[i]+"<br>")
}

//add elements in array unlike other programming language

//Objects in JS

document.write("<h3>Objects</h3>");


//literal way to initialize an object
var player1={
    name:"Virat Kohli",
    team:"RCB",
    price:15.06,
    //method
    player_fun: function(){
        document.write("<h4>He is a cricketer</h4>");
    }
}
document.write("<h4>"+player1.name+"</h4>")

//object constructors
function players(name,team,price){
    this.name=name;
    this.team=team;
    this.price=price;
    this.performance=function(){
        document.write("<h4>He is a cricketer</h4>");
    }
}

p1=new players("Rohit Sharma","MI",15);
document.write("<h4>"+p1.name+" "+p1.team+"</h4>");

//Booleans,numbers,strings can be objects
//dates maths regular expressions are always object
var str1=new String();
var num11=new Number();
var bol1=new Boolean();
//add property to a object
player1.prefHand='Right';
document.write("<h4>"+player1.prefHand+"</h4>");