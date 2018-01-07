# Northcoders News Front-end

A reddit-style (community voted content) responsive front-end to demonstate a solid understanding of *React*, *Redux*, *CSS*, and other technologies. This project retrieves data using a back-end API written to support this project found [here](https://github.com/Sinnedennis/Northcoders_News_Back_End). A deployed version of this website can be viewed by clicking [here](https://north-coding-news.herokuapp.com/).
___

## Table of contents

* [Setup](https://github.com/Sinnedennis/Northcoders_News_Front_End#setup)
* [Installation](https://github.com/Sinnedennis/Northcoders_News_Front_End#installation)
* [Usage](https://github.com/Sinnedennis/Northcoders_News_Front_End#usage)
* [Depenencies](https://github.com/Sinnedennis/Northcoders_News_Front_End#depenencies)
___

## Setup

1. Ensure that your machine is running Node version 7 or above. To check what version you are running, open a terminal window and type:
    ``` 
    node -v
    ```
    If you do not receive a response in the format of v7.2.1, or your version of Node is older than 7x, [click here](https://nodejs.org/en/) to download and install Node from the official website.
   
2. Ensure you have Node Package Manager (NPM) installed. As above, open a terminal window and type:
    ``` 
    npm -v
    ```
    If you do not receive a response in the format of v5.5.1, or your version of NPM is older than 5x, type the following commands into your terminal:
    ``` 
    npm install npm
    ```
    If you run into any issues with the above steps, [click here](https://docs.npmjs.com/getting-started/installing-node) to follow NPM's official guide to installing Node and NPM. 
___

## Installation

1. Open a terminal window, navigate to the directory where you wish to install this repository, and run the following command:
  ```
  git clone https://github.com/Sinnedennis/Northcoders_News_Front_End
  ```
2. Navigate into the freshly-cloned directory and run:
  ```
  npm install
  ```
___

## Usage

In order to run the application run the following command
```
npm start
```
Then the application will open in your default browser at http://localhost:3000.

To run the testing suite, type the following terminal command:
```
npm t
```
___
## Dependencies
|    Package    | Use          |
|:-------------:|:-------------|
| [react](https://reactjs.org/)                     | Single-page-application library |
| [redux](https://redux.js.org/docs/introduction/)  | State management library        |
| [babel](https://babeljs.io/)                      | Transcompiler                   |
| [webpack](https://webpack.js.org/)                | Module bundler                  |
| [bulma](https://bulma.io/)                        | Front-end framework             |
| [nock](https://github.com/node-nock/nock)         | HTTP mocking library            |
| [mocha](https://mochajs.org/)                     | Testing environment             |
| [chai](http://chaijs.com/)                        | Assertion library               |

