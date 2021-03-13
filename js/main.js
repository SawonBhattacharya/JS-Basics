

//document.ready event then only perform the tasks

$(document).ready(function(){
    function fade(){
        //$(".heading").fadeToggle(1000);  
        //$("div > p").fadeToggle(1000);  
        //$("#headings2").fadeToggle(1000);
        //$("p:first").fadeToggle(1000);
        //$(".divstyle:odd").fadeToggle(1000);
     }
    //jQuery selectors allow us to select and manipulate HTML elements based on their name id class types attributes values of attrivutes.
    //document.getElementsByTagname("h2");
    //$("h2") $ is here to call jquery file 
    //$("h2").action_name();
    
    //Event handling
    
    /*$("#btn").click(function(){
        $(".divstyle:odd").fadeToggle(1000);
    });*/

    $("#btn1").mouseenter(function(){
        $(".divstyle:odd").fadeOut(1000);
    });

    $("#btn2").mouseleave(function(){
        $(".divstyle:odd").fadeIn(1000);
    });

    $("#btn3").hover(function(){
        $(".divstyle:odd").fadeIn(1000);
    },
    function(){
        $(".divstyle:odd").fadeOut(1000);
    });

    $("#btn4").click(function(){
       $("#cdiv").animate({
            left:'150px',//first css to manipulate
            opacity:'1',
            color:'blue',
            height:'150px',
            width:'150px'
        },1000)//instead of giving number we can also give fast slow keywords
    });

    //callbacks
    $("#btn5").click(function(){
        $("#roll1").slideToggle(4000,function(){
            alert("division 1 is fadded");//inside callback function
        });
        function printmsg(){
            alert("division 2 is fadded");//inside callback function
        }
        $("#roll2").fadeToggle(6000,printmsg);//explicitly create a callback function 

        $("#roll3").slideUp(2000).slideDown(2000).fadeOut(2000).fadeIn(2000);//chaining is nothing but series of functions
        
    });
});
