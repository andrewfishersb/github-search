# GitHub Search

## This site will uses javascript and the GitHub API, 10/14/16

#### By **Andrew Fisher**
![ScreenShot](https://cloud.githubusercontent.com/assets/17396138/25400481/9a716f98-29a7-11e7-93eb-eb47af2fb397.png)
![ScreenShot](https://cloud.githubusercontent.com/assets/17396138/25400482/9a74f956-29a7-11e7-833e-32173dcb880b.png)

## Description
This site will search for any inputted user, and using the GitHub API return information about said user, their repositories, their followers and who they are following.

## Specifications


#### Main Page

user input                | output
------------------------- | -------------
The user enters a username of a GitHub profile they are searching for| name, date account created and location are returned

user input                | output
------------------------- | -------------
The user enters a username of a GitHub profile they are searching for| repositories belonging to the user with their information such as title date of initial creation and last updated

user input                | output
------------------------- | -------------
The user enters a username of a GitHub profile they are searching for| names of all the searched users followers and who they are following.



## Setup/Installation Requirements

* Clone from github
* change directory to github-search
* run npm install
* run bower install
* run gulp build
* run gulp serve
* go to settings in GitHub to generate your own API key
* create an .env file and type inside -> exports.apiKey ="The Api Key You Generated Here";


## Technologies Used

* JavaScript
* Gulp
* Node.js
* Git
* SASS
* HTML
* bower

### License

*GPL*

Copyright (c) 2016 **Andrew Fisher**
