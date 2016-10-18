var apiKey = require("./../.env").apiKey;

function User(){
 console.log("hello");
}

User.prototype.getUserInformation = function (username, displayFunction) {
  $.get('https://api.github.com/users/'+username+'?access_token=' + apiKey).then(function(response){
    displayFunction(username,response.name, response.avatar_url, response.created_at,response.location,response.html_url,response.hireable);
  }).fail(function(error){
    console.log(error.responseJSON);
  });
};

User.prototype.getOtherInformation = function(typeOfInformation,username, displayFunction){
  $.get('https://api.github.com/users/'+username+'/'+typeOfInformation+'?access_token=' + apiKey).then(function(response){
    displayFunction(username,response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};


exports.userModule = User;
