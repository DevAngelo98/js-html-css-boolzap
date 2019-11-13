$(document).ready(function(){

  $("#sendmessage").click(function(){  
    $("#micblock").addClass("mic");
    $(".send").attr('id',"sendbutton");
  });

  $(".send").click(function(){

    var textMessage = $("#sendmessage").val();
    textMessage.replace(/\s+/g," ");
    while(textMessage.lenght>20){
       
    }
    
    var elementMsg = $("#template-message .my-message-text").clone();
    var elemeText = elementMsg.html(textMessage);
   
    $("#container_messages").append(elemeText);
  });




});