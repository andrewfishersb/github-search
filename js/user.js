var apiKey = require("./../.env").apiKey;

function User(){
 console.log("hello");
}

User.prototype.getRepos = function(){
  $.get('https://api.github.com/users/repos?access_token=' + apiKey).then(function(response){
    $("#display").append("<li>API Key:"+apiKey+"<li>");
    // $("#display").append("<li>User: " +  +"<li>");
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};


exports.userModule = User;
// f2f8bb3db6ffc1a7de0808320421143b7ce7835d
