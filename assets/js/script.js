$(document).ready(function(){

  //Function bot
  function bot(){
    var elementMsgBot = $("#template-message .user-message-text").clone().text("ok");
    $("#container_messages").append(elementMsgBot);
    var msgUser = new Array();
    for(var i=0; i<containerUser.length; i++){
      var nameTemp=$("#icontemp").find("h5").text();
      var nameArray = containerUser[i].name;
      // console.log(nameTemp);
      if(nameTemp===nameArray){
        msgUser.push($("#container_messages").clone());
        containerUser[i].msg = msgUser;
        // console.log(containerUser[i].msg);
      }
      console.log(containerUser[i].msg);
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
    init: function(name,msg){
      this.name = name;
      this.msg = msg;
    },
  };
  // var user = Object.create(userObj);
  var containerUser = new Array();

  $(".user-container").each(function(index){
    var containerEmpty = $("#container_messages").clone();
    var nameUser = $(this).find("h5").text();
    var imgTemp = $(this).find("img").clone();
    var msgUser = new Array();
    var user = Object.create(userObj);
    user.name = nameUser;
    msgUser.push(containerEmpty);
    user.msg = msgUser;
    containerUser.push(user);
    if(index==0){
      $("#icontemp #namereplace").text(nameUser);    
      $("#icontemp img").replaceWith(imgTemp);
      $(this).addClass("backgroundtemp");
    }
    
    $(this).click(function(){
      $(".user-container").not($(this)).removeClass("backgroundtemp");
      $(this).addClass("backgroundtemp");
      var nameTemp = $(this).find("h5").text();
      var imgTemp = $(this).find("img").clone();
      $("#icontemp #namereplace").text(nameTemp);    
      $("#icontemp img").replaceWith(imgTemp);

      for(var i=0; i<containerUser.length; i++){
        var nameArray = containerUser[i].name;
        if(nameTemp==nameArray){
          console.log("DDDDD");
          // console.log(containerUser[i].msg.lenght);
          $("#container_messages").replaceWith(containerUser[i].msg);        
        } else if (containerUser[i].msg.lenght==0){
          $("#container_messages").replaceWith(containerEmpty);
          // console.log("SI");
        }
      }
    });
  });
  // console.log(containerUser);
});
