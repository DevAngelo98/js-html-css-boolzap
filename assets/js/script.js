$(document).ready(function(){

  //Function bot
  function bot(){
    var elementMsgBot = $("#template-message .user-message-text").clone().text("ok");
    $("#container_messages").append(elementMsgBot);
  }

  // Change icon to click
  $("#sendmessage").click(function(){  
    $("#micblock").addClass("mic");
    $(".send").attr('id',"sendbutton");
  });

  // I create the message
  $(".send").click(function(){
    var textMessage = $("#sendmessage").val();
    var elementMsg = $("#template-message .my-message-text").clone();
    var elementText = elementMsg.text(textMessage);
    $("#container_messages").append(elementText);
    $("#sendmessage").val("");
    setTimeout(bot, 1000);
  });


  // Contact search method
  $("#search").keyup(function(){
   var inputSearch = $(this).val().toUpperCase();
   console.log(inputSearch);
   searchUser(inputSearch);
  });

  // Search user
  function searchUser (input){
    $(".user-container").each(function(){
        // console.log($(this).find("h5").text());
      if(!$(this).find("h5").text().toUpperCase().includes(input)){
        $(this).addClass("none");
      } else {
        $(this).removeClass("none");
      }
    });
  }
  

  
  $(".user-container").each(function(){
    $(this).click(function(){
      $(".user-container").not($(this)).removeClass("backgroundtemp");
      $(this).addClass("backgroundtemp");
      var nameTemp = $(this).find("h5").text();
      var imgTemp = $(this).find("img").clone();
      $("#icontemp #namereplace").text(nameTemp);    
      $("#icontemp img").replaceWith(imgTemp);  
    });
  });

  
  

});
