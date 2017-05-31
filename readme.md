# Ionic 3 Chat App
 Ionic 3 Chat App that allows for group chats and private chats. Editable profile pages.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.
### Prerequisites
Node, npm.
### Installation
A step by step series of examples that tell you have to get a development env running


Install ionic:
```
$ npm install -g cordova ionic
```
clone the project:
```
$ git clone https://github.com/marnibrewster/beep
```
cd into project
```
$ cd <project name>
```
create your own firebase app at firebase.google.com. Click 'add firebase to your web app' from the dashboard of your new app. Create a file at src/app/app.firebase.config.ts and add this to it:
export const FIREBASE_CONFIG = <your config object from the firebase code>;

start ionic server:
```
$ ionic serve
```
View in browser or check out how your app appears in mobile by going to: http://localhost:8100/ionic-lab


## Why did you make this?
This app was created as part of the Udemy's 'Learn Ionic 3' course.
