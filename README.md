## Angular Material Course

This repository contains the code of the Angular Material In Depth.

This course use Angular 20:

![Angular Material In Depth](https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-material-course-1.jpg)

# Installation pre-requisites

IMPORTANT: Please use Node 22 LTS (Long Term Support version).

# Installing the Angular CLI

With the following command the angular-cli will be installed globally in your machine:

    npm install -g @angular/cli 

# To Run the Development Backend Server

Our Angular frontend connects to a simple Node server, running also in your local development machine.

We can start the sample application backend with the following command:

    npm run server

# To run the Development UI Server

Once the backend server is up and running, we can now run our frontend server. 

To run the frontend part of our code, we will use the Angular CLI:

    npm start 

The application is visible at port 4200: [http://localhost:4200](http://localhost:4200)

Note: **make sure to use command npm start and not ng serve, as npm start adds a couple extra options that are needed for our project **