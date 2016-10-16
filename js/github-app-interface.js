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

var displayRepo = function(username,response){
  // $("#repo").empty() -- maybe
  for (var i = 0; i < response.length; i++) {
    $("#repo").append("<h4>Title: <a href='"+response[i].html_url+"'>"+response[i].name+"</a></h4>");
    if(response[i].description){
        $("#repo").append("<h5>Description: "+response[i].description+"</h5>");
    }
    $("#repo").append("<h5>Main Language: "+response[i].language+"</h5><br>");
  }

}

//repo
//Title: title attached to a html_url
//description if has one
//main language: language

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
    username.getRepos(user,displayRepo);
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


//follower/following
//avatar_url
//login
//html_url
