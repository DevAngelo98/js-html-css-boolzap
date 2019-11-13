$(document).ready(function(){

  //Function bot
  function bot(){
    var elementMsgBot = $("#template-message .user-message-text").clone().text("ok");
    $("#container_messages").append(elementMsgBot);
  }

  $("#sendmessage").click(function(){  
    $("#micblock").addClass("mic");
    $(".send").attr('id',"sendbutton");
  });

  $(".send").click(function(){
    var textMessage = $("#sendmessage").val();
    var elementMsg = $("#template-message .my-message-text").clone();
    var elementText = elementMsg.text(textMessage);
    $("#container_messages").append(elementText);
    $("#sendmessage").val("");
    setTimeout(bot, 1000);
  });




});
