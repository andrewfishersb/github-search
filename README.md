# GitHub Search

#### By **Andrew Fisher**

## Images
![ScreenShot](https://cloud.githubusercontent.com/assets/17396138/25400481/9a716f98-29a7-11e7-93eb-eb47af2fb397.png)
![ScreenShot](https://cloud.githubusercontent.com/assets/17396138/25400482/9a74f956-29a7-11e7-833e-32173dcb880b.png)

## Description
A single page simple site that will search for any inputted user, and using the GitHub API return information about said user.

## User Stories

* As a user, I want to be able to search for any valid GitHub user.
* As a user, I want to see specific information about the user searched.

## Specifications

* Search for any GitHub user.
* See the users:
  - Profile Picture.
  - Location.
  - Name and Username
    * The username is hyperlinked to the user's GitHub profile
  - See if they are available for hire
  - Date their profile was created.
  - A List of their GitHub repositories, with the following information:
    * The repositories title
      - This is hyperlinked to the repositories GitHub page.
    * The Main language of the repository.
    * When the repository was created.
    * When the repository was last updated.
  - See a list of their followers
    * Followers Profile Picture.
    * Followers Username.
      - The username is hyperlinked to their GitHub profile.
  - See a list of who they are following.
    * Followings Profile Picture.
    * Followings Username.
      - The username is hyperlinked to their GitHub profile.

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

## Known Bugs
* No validation when the searched username is nonexistent

### License

*GPL*

Copyright (c) 2016 **Andrew Fisher**
