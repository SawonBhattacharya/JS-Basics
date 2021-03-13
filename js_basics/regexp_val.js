function validateExp(){
    var username=document.getElementById("usr").value;
    var cellphone=document.getElementById("cell").value;
    var email=document.getElementById("eml").value;
    //regx=new RegExp("E00");//obj oriented way
    //modifiers i case insensitive m multiline g perform a global match(find all the present matches)
    //[abc] find any char between brackets
    //[^abc] find any char not between brackets
    //[0-9] finy any digits
    //[^0-9] any non digits
    //(x|y) find any of the alternatives specified
    //regex101.com
    //https://www.w3schools.com/jsref/jsref_obj_regexp.asp for more metach
    //metcharacters an quantifiers
    var regx=/E00/;
    var cellexp=/^\+91[6-9]\d{9}$/;
    var emlexp=/^([a-z0-9\._-]+)@([a-z0-9-_]+).([a-z\.]+)$/;
    if(regx.test(username))
    {
        //alert("valid");
    }
    else
    {
        //alert("invalid");
        document.getElementById("visul").style.visibility="visible";
    }
    
    if(cellexp.test(cellphone))
    {
        document.getElementById("cellv").style.visibility="visible";
        document.getElementById("cellv").style.color="green";
        document.getElementById("cellv").innerHTML="Valid";
    }
    else
    {
        document.getElementById("cellv").style.visibility="visible";
        document.getElementById("cellv").style.color="red";
        document.getElementById("cellv").innerHTML="Invalid";
    }
    if(emlexp.test(email))
    {
        document.getElementById("emlv").style.visibility="visible";
        document.getElementById("emlv").style.color="green";
        document.getElementById("emlv").innerHTML="Valid";
    }
    else
    {
        document.getElementById("emlv").style.visibility="visible";
        document.getElementById("emlv").style.color="red";
        document.getElementById("emlv").innerHTML="Invalid";
    }
}