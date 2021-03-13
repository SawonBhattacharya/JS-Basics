$(document).ready(function(){
    $("#btn6").click(function(){
        //alert($('#dom1').html());//text() is innerHtml
        //$('#dom1').text("Yaay DOM manipulation is done!!!");
        //$('#dom1').html("<p> <b>Yaay</b> DOM manipulation is done!!!</p>")
        alert($('#dom1').attr("class")); //attr basically fetches the value of the attributes of the given id 
        //alert($('#dom1').css("color"));
        //alert($('#dom1').css("border"));
    });//html & text &attr & css
    $('#btn7').click(function(){
        $('#dom1').attr('class','domup');
        alert($('#dom1').attr('class'));
    });//changing values using attr 

   //append() insert at the end of a selected elements
   //prepend() insert in the beginning of a selected elements
   //after() insert after a selected elements 
   //before() insert before the selected elements
  //remove() remove an element which is selected
  //empty() clean the element inside the selected element
   $("#btn8").click(function(){
       $("#dom3").append("<p id=\"pd\">hello it is a new para appeneded inside dom3.</p>");
   });

   $("#btn9").click(function(){
        $("#dom3").prepend("<p>hello it is a new para prepeneded inside dom3.</p>");
    });

    $("#btn10").click(function(){
        $("#dom3").after("<p>hello it is a new para after dom3.</p>");
    });
    
    $("#btn11").click(function(){
        $("#dom3").before("<p>hello it is a new para before dom3.</p>");
    });

    $("#btn12").click(function(){
        //alert($("#pd").html());
        $("#pd").remove();
    });

    $("#btn13").click(function(){
        $("#pd").empty();
    });
//addClass removeClasss toggleClass CSS
    $("#btn14").click(function(){
        $("#dom5").addClass("doma")
    });

    $("#btn15").click(function(){
        $("#dom5").removeClass("doma")
    });

    $("#btn16").click(function(){
        $("#dom5").toggleClass("pclass")
    });

    $("#btn17").click(function(){
        $("#dom5").css("font-style","normal");//once it is updated can't be updated again
    });
});