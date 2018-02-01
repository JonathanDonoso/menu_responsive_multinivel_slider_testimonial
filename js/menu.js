$(document).ready(function(){
   
    
    $(".submenu").click(function(){
       
        $(this).children("ul").slideToggle();    //click sobre el submenu y aparece sus hijos ul 
    });
     
    $("ul").click(function(e){
       e.stopPropagation();    
    });
});
