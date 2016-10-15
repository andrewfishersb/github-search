var User = require("./../js/user.js").userModule;

var displayUser = function(username,name,avatar,created,location,url,hireable){
  $("#pic").empty();
  $("#user").empty();
  $("#date").empty();
  $("#location").empty();
  $("#hire").empty();

  $("#pic").append("<img src='"+ avatar+ "'alt='users profile picture' />");
  if(name){
    $("#user").append("<h2>"+name+" / <a href='"+url+"'>"+username+"</a></h2>");
  }else{
    $("#user").append("<h2><a href='"+url+"'>"+username+"</a></h2>");

  }
  $("#date").append("<h4>Date Created: "+formatDate(created)+"<h4>");
  if(location){
    $("#location").append("<h4>Location: "+location+"<h4>");
  }
  if(hireable){
    $("#hire").append("<h5>Available for hire</h5>");
  }else{
    $("#hire").append("<h5>Currently Employed/ not looking</h5>");
  }
};


var formatDate = function(date){
  var day = new Date(date).toString();
  var formatDate = day.split(" ");
  date = formatDate[1]+" "+formatDate[2]+", "+formatDate[3];
  return date;
};


$(document).ready(function(){
  var username = new User();
  $("#search").submit(function(event){
    event.preventDefault();
    // $("#all-info").empty();
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
