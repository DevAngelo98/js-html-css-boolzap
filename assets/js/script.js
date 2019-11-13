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


  $("#search").keyup(function(){
   var inputSearch = $(this).val().toUpperCase();
   console.log(inputSearch);
   
   searchUser(inputSearch);
  });

  // Search user
  function searchUser (input){

    if(input.lenght!=0){
      $(".user-container").each(function(){
        // console.log($(this).find("h5").text());
      if(!$(this).find("h5").text().toUpperCase().includes(input)){
        $(this).addClass("none");
        // $(".user-container").not($(this)).addClass("ok");
      } else {
        $(this).removeClass("none");
      }
      });
    }
    

  }
  

});
