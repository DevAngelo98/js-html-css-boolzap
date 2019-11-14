$(document).ready(function(){
  // var arrayMsg = new Array();
  //Function bot
  function bot(){
    var elementMsgBot = $("#template-message .user-message-text").clone().text("ok");
    $("#container_messages").append(elementMsgBot);
    // arrayMsg = [];
    // arrayMsg.push($("#container_messages *").clone());
    for(var i=0; i<containerUser.length; i++){
      var nameTemp=$("#icontemp").find("h5").text();
      var nameArray = containerUser[i].name;
      if(nameTemp==nameArray){
        containerUser[i].msg.push($("#container_messages *").clone());
      }
    }
    
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
  
  //Object
  var userObj = {
    name: "",
    msg: []
  };

  var containerUser = new Array();

  $(".user-container").each(function(){
    var containerEmpty = $("#container_messages").clone();
    var nameUser = $(this).find("h5").text();
    var user = Object.create(userObj);
    user.name = nameUser;
    user.msg.lenght=0;
    containerUser.push(user);

    $(this).click(function(){
      $(".user-container").not($(this)).removeClass("backgroundtemp");
      $(this).addClass("backgroundtemp");
      var nameTemp = $(this).find("h5").text();
      var imgTemp = $(this).find("img").clone();
      $("#icontemp #namereplace").text(nameTemp);    
      $("#icontemp img").replaceWith(imgTemp);
      for(var i=0; i<containerUser.length; i++){
        var nameArray = containerUser[i].name;
        if(nameTemp==nameArray && containerUser[i].msg.lenght>0){
          // console.log(containerUser[i].msg.lenght);
          // $("#container_messages").replaceWith(containerUser[i].msg);        
        } else if (containerUser[i].msg.lenght==0){
          $("#container_messages").replaceWith(containerEmpty);
          console.log("SI");
        }
      }
      
    });
  });

});
