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
  $("#repo").empty();
  for (var i = 0; i < response.length; i++) {
    $("#repo").append("<h3>Title: <a href='"+response[i].html_url+"'>"+response[i].name+"</a></h3>");
    if(response[i].description){
        $("#repo").append("<h5>Description: "+response[i].description+"</h5>");
    }
    $("#repo").append("<h5>Main Language: "+response[i].language+"</h5>");
    $("#repo").append("<h5>Created: "+formatDate(response[i].created_at)+"</h5>");
    $("#repo").append("<h5>Last Updated: "+formatDate(response[i].updated_at)+"</h5><br>");
  }
}

var displayFollowers = function(username,response){
  $("#followers").empty();
  $("#followers").append("<h4><u>Followers</u></h4>");
  for (var i = 0; i < response.length; i++) {
    if(i%2!==0){
      $("#followers").append("<div class='row'><div class='col-sm-6'><img src='"+response[i].avatar_url+"' alt='follower avatar'/><h5><a href='"+response[i].html_url+"'>"+response[i].login+"</a></h5></div>");
    }else{
      $("#followers").append("<div class='col-sm-6'><img src='"+response[i].avatar_url+"' alt='follower avatar'/><h5><a href='"+response[i].html_url+"'>"+response[i].login+"</a></h5></div></div>");
    }
  }
}

var displayFollowing = function(username,response){
  $("#following").empty();
  $("#following").append("<h4><u>Following</u></h4>");
  for (var i = 0; i < response.length; i++) {
    if(i%2!==0){
      $("#following").append("<div class='row'><div class='col-sm-6'><img src='"+response[i].avatar_url+"' alt='following avatar'/><h5><a href='"+response[i].html_url+"'>"+response[i].login+"</a></h5></div>");
    }else{
      $("#following").append("<div class='col-sm-6'><img src='"+response[i].avatar_url+"' alt='following avatar'/><h5><a href='"+response[i].html_url+"'>"+response[i].login+"</a></h5></div></div>");
    }
  }
}


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
    username.getOtherInformation("repos",user,displayRepo);
    username.getUserInformation(user, displayUser);
    username.getOtherInformation("followers", user,displayFollowers);
    username.getOtherInformation("following", user,displayFollowing);

  });

  $("button").on("click",function() {
    alert("Hey");
  });
});

//Ideas
//show user searhed for
  //button to show following or following, each of which has a button to show more information like of their repos

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
