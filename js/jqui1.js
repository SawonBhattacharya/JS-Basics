$(document).ready(function(){
//widgets

    $("#datepicker").datepicker({
        //numberOfMonths:3,
        changeYear:true,
        changeMonth:true,
        showWeek:true,
        weekHeader:"wk num",
        showOtherMonths:true,
        minDate: new Date(2019,0,1),
        maxDate: new Date(2022,0,1)
    });

    $("#img1").tooltip({
        //track:true,
        content:"It is a pink ball for test matches!",
        show:{
            effect:"pulsate",//"explode" "blind "higlight""bounce",
            duration:2000 //ms
        },
        hide:{
            effect:"blind",//"explode" "blind "higlight""bounce",
            duration:2000 //ms
        }
    });

    $("#div2").accordion({
        collaspible:true,
        event:"mouseover", //"click"
        //animate:200
        active:0,//starts with 0
        heightStyle:true,
        icons:{
            header:"ui-icon-plus",
            activeHeader:"ui-icon-minus"//these names are avialable in jQuery documentation
        }
    });

    $("#btn1").click(function(){
        $("#div4").dialog({
            title:"Ravi Ashwin",
            draggable:true,
            resizeable:true,
            //height:300,
            //width:500,
            modal:true,//can't do anything in the website

            buttons:[
                {
                    text:"Close",
                    icon:"ui-icon-heart",
                    click:function(){
                        $(this).dialog("close");
                    }
                },
                {
                    text:"Ok",
                    icon:"ui-icon-heart",
                    click:function(){
                        $(this).dialog("close");
                    }
                },
            ]
        });
    });
});
