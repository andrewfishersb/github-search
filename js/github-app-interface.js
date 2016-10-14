var User = require("./../js/user.js").userModule;
$(document).ready(function(){
  var username = new User();
  username.getRepos();
  $("#search").submit(function(event){
    event.preventDefault();
    var user = $("#username").val();
    console.log(user);
    $("#display").append("<h1>"+user+"</h1>");
  });

});
