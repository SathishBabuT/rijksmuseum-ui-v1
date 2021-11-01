# RijksmuseumApp

This application was created to show the list of masterpieces which are present in the museum. It gives an overview to the audience about the available masterpieces.

## Technical Details 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.11.
It also includes backend folder which has node & express js implementation. 

**First assignment code also placed under this repo. (Visit first_assignment/coding_challenge.js)

## Implementation Plan

As we need to cache the service response I decided to go with the kind of MEAN project. From Angular when we make a service request to Express JS, a check will be done to see whether the service response is already cached (nodeCache). If it is cached then it will not make any request to Rijksmuseum API, otherwise the request will be sent. 

Note: Mongo DB installation and connection was not done as it was not required for this project

Under Angular project I have created two separate folders (check inside 'app') to differentiate the reusable and non-reusable logic. All the reusable logic (service or component) has been placed under 'shared' folder and the other one has been placed under 'modules' folder. Also you might see some parent child relationship between the components which are placed under 'modules' folder.

## Implemented Features

* ArtObjects display
* Search artObject using title (currently it works only based on fullmatch)
* Detailed information about selected artObject
* Back option navigation (Detailed screen to Search screen)
* Display spinner when artObject retrival is in progress
* Data caching server side

## Incompleted or InProgress Features

* Sort based on Relevance/Kind of work/Chronological order
* Filter based on Maker/Type

## Code Checkout & Server Start

Checkout the code to your machine and run 'npm install' command on 'rijksmuseum-app' folder and 'rijkemuseum-app/backend' folder. 

Once it is successfully done, run `npm start` from 'rijkemuseum-app/backend' folder to start the backend server and `ng serve` from 'rijksmuseum-app' folder for frontend. Finally navigate to `http://localhost:4200/` to see the rijksmuseum search application.
