var User = require("./../js/user.js").userModule;

var displayUser = function(username,name,avatar,created,location,url,hireable){
  $("all-info").empty();
  $("#pic").append("<img src='"+ avatar+ "'alt='users profile picture' />");
  $("#user").append("<h2>"+name+" / <a href='"+url+"'>"+username+"</a></h2>");
  $("#date").append("<h4>Date Created: "+created+"<h4>");
  if(location){
    $("#location").append("<h4>Location: "+location+"<h4>");
  }
  if(hireable){
    $("#hire").append("<h5>Available for hire</h5>");
  }else{
    $("#hire").append("<h5>Currently Employed/ not looking</h5>");
  }
}




$(document).ready(function(){
  var username = new User();
  $("#search").submit(function(event){
    event.preventDefault();
    var user = $("#username").val();
    // username.getRepos(user,displayUser);
    username.getUserInformation(user, displayUser);
  });

});

//Ideas
//show user searhed for
  //button to show followers or following, each of which has a button to show more information like of their repos

//avatar_url
//created
//followers + url
//following + url
//location
//name
//url
//url to repo


//possibly display repos
  // languages
  // name
  //html_url
  //description
