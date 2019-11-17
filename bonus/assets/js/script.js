$(document).ready(function(){

  //Function bot
  function bot(){
    var dateClone = $("#template-message .user-message-text .sendingtime").clone();
    var dateNow = date();
    dateClone.text(dateNow);
    var elementMsgBot = $("#template-message .user-message-text").clone().text("ok").append(dateClone);
    $("#container_messages").append(elementMsgBot);
    var msgUser = new Array();
    
    //Change message
    $(".user-container").each(function(){
      var nameUser = $(this).find("h5").text();
      var nameTemp=$("#icontemp").find("h5").text();
      
      if (nameUser == nameTemp) {
        $(this).find(".changemsg").text("ok");
      }
    });

    //Save messages
    for(var i=0; i<containerUser.length; i++){
      var nameTemp=$("#icontemp").find("h5").text();
      var nameArray = containerUser[i].name;
      // console.log(nameTemp);
      if(nameTemp===nameArray){
        msgUser.push($("#container_messages").clone());
        containerUser[i].msg = msgUser;
        // console.log(containerUser[i].msg);
      }
      // console.log(containerUser[i].msg);
    }

    $(".namelast .last").removeClass("block");
  }
  

  // Change icon to click
  $("#sendmessage").focus(function(){  
    $("#micblock").addClass("mic");
    $(".send").attr('id',"sendbutton");
  });

  $(document).click(function(e){
    if ( $(e.target).closest(".input_message").length === 0 ) {
      $("#micblock").removeClass("mic");
      $(".send").removeAttr('id');
    }
  });

  // I create the message
  $(".send").click(function(){
    var textMessage = $("#sendmessage").val();

    if(textMessage.length>0){  
      var elementMsg = $("#template-message .my-message-text").clone();
      var time = $("#template-message .my-message-text .sendingtime").clone()
      time.text(date());
      var remove = $("#template-message .remove").clone();
      var svg = $("#template-message svg").clone();
      var elementText = elementMsg.text(textMessage).append(time).append(remove).append(svg);
      $("#container_messages").append(elementText);
      $("#sendmessage").val("");
      $(".namelast .last").addClass("block");
      setTimeout(bot, 1000);
      

      $(".user-container").each(function(){
        var nameUser = $(this).find("h5").text();
        var nameTemp=$("#icontemp").find("h5").text();
        if (nameUser == nameTemp) {
          $(this).find(".changemsg").text(textMessage);
        }
      });
      
    }
      //Reset icone 
      $("#micblock").removeClass("mic");
      $(".send").removeAttr('id');
 
  });

  // I create the message with enter 
  $("#sendmessage").keypress(function(e){
    var key = e.which;
    if(key==13){
      $(".send").click();
      $("#sendmessage").focus();
    }
  });
  // Contact search method
  $("#search").keyup(function(){
   var inputSearch = $(this).val().toUpperCase();
  //  console.log(inputSearch);
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
          // console.log(containerUser[i].msg.lenght);
          $("#container_messages").replaceWith(containerUser[i].msg);        
        } else if (containerUser[i].msg.lenght==0){
          $("#container_messages").replaceWith(containerEmpty);
          // console.log("SI");
        }
      }
    });
  });

  // delete message
  $(".right_my-col ").on("click", "#container_messages .remove", function(event){
    event.preventDefault();
    $(this).parent().addClass("none");
  });

  $(".right_my-col ").on("click", "#container_messages .svgremove", function(event){
    event.preventDefault();
    $(this).toggleClass("active");
    $(this).parent().children(".remove").toggle();
    // $("#container_messages .remove").toggle();
  });

  // Date
  function date(){
    function addZero(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }

    var d = new Date();
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
    var date = h + ":" + m + ":" + s;
    return date;
  }

});
