var apiKey = require("./../.env").apiKey;

function User(){
 console.log("hello");
}

User.prototype.getUserInformation = function (username, displayFunction) {
  $.get('https://api.github.com/users/'+username+'?access_token=' + apiKey).then(function(response){
    displayFunction(username,response.name, response.avatar_url, response.created_at,response.location,response.html_url,response.hireable);
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON);
  });
};

//could reuse this method for followers and following and just add a third parameter
User.prototype.getRepos = function(username, displayFunction){
  $.get('https://api.github.com/users/'+username+'/repos?access_token=' + apiKey).then(function(response){
    displayFunction(username,response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

User.prototype.getFollowers = function (username, displayFunction) {
  $.get('https://api.github.com/users/'+username+'/followers?access_token=' + apiKey).then(function(response){
    displayFunction(username,displayFunction);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });

};
exports.userModule = User;
// f2f8bb3db6ffc1a7de0808320421143b7ce7835d
//https://api.github.com/users/repos?access_token=


// Object {login: "andrewfishersb", id: 17396138, avatar_url: "https://avatars.githubusercontent.com/u/17396138?v=3", gravatar_id: "", url: "https://api.github.com/users/andrewfishersb"…}
// avatar_url
// :
// "https://avatars.githubusercontent.com/u/17396138?v=3"
// bio
// :
// null
// blog
// :
// null
// company
// :
// null
// created_at
// :
// "2016-02-22T01:52:54Z"
// email
// :
// null
// events_url
// :
// "https://api.github.com/users/andrewfishersb/events{/privacy}"
// followers
// :
// 10
// followers_url
// :
// "https://api.github.com/users/andrewfishersb/followers"
// following
// :
// 3
// following_url
// :
// "https://api.github.com/users/andrewfishersb/following{/other_user}"
// gists_url
// :
// "https://api.github.com/users/andrewfishersb/gists{/gist_id}"
// gravatar_id
// :
// ""
// hireable
// :
// true
// html_url
// :
// "https://github.com/andrewfishersb"
// id
// :
// 17396138
// location
// :
// null
// login
// :
// "andrewfishersb"
// name
// :
// "Andrew Fisher"
// organizations_url
// :
// "https://api.github.com/users/andrewfishersb/orgs"
// public_gists
// :
// 0
// public_repos
// :
// 85
// received_events_url
// :
// "https://api.github.com/users/andrewfishersb/received_events"
// repos_url
// :
// "https://api.github.com/users/andrewfishersb/repos"
// site_admin
// :
// false
// starred_url
// :
// "https://api.github.com/users/andrewfishersb/starred{/owner}{/repo}"
// subscriptions_url
// :
// "https://api.github.com/users/andrewfishersb/subscriptions"
// type
// :
// "User"
// updated_at
// :
// "2016-10-03T16:08:29Z"
// url
// :
// "https://api.github.com/users/andrewfishersb"
