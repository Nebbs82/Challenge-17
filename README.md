
# Social Network API
=====================================

## Table of Contents
-----------------

* [Description](#description)
* [Features](#features)
* [API Routes](#api-routes)
* [Usage](#usage)
* [Walkthrough Video](#walkthrough-video)
* [License](#license)
* [Contributing](#contributing)
* [Author](#author)

## Description
---------------

This is a social network API built using Node.js, Express.js, and MongoDB. It allows users to share thoughts, react to friends' thoughts, and create a friend list.

## Features
------------

* User model with username, email, thoughts, and friends
* Thought model with thoughtText, createdAt, username, and reactions
* Reaction model with reactionId, reactionBody, username, and createdAt
* API routes for creating, reading, updating, and deleting users, thoughts, and reactions
* API routes for adding and removing friends from a user's friend list

## API Routes
-------------

### Users

* **GET** `/api/users`: Get all users
* **GET** `/api/users/:id`: Get a single user
* **POST** `/api/users`: Create a new user
* **PUT** `/api/users/:id`: Update a user
* **DELETE** `/api/users/:id`: Delete a user

### Friends

* **POST** `/api/users/:userId/friends/:friendId`: Add a new friend to a user's friend list
* **DELETE** `/api/users/:userId/friends/:friendId`: Remove a friend from a user's friend list

### Thoughts

* **GET** `/api/thoughts`: Get all thoughts
* **GET** `/api/thoughts/:id`: Get a single thought
* **POST** `/api/thoughts`: Create a new thought
* **PUT** `/api/thoughts/:id`: Update a thought
* **DELETE** `/api/thoughts/:id`: Delete a thought

### Reactions

* **POST** `/api/thoughts/:thoughtId/reactions`: Create a reaction
* **DELETE** `/api/thoughts/:thoughtId/reactions/:reactionId`: Remove a reaction

## Usage

1. Install MongoDB on your machine and start the server
2. Clone this repository and navigate to the project directory
3. Run `npm install` to install dependencies
4. Run `npm start` to start the server
5. Use a tool like Insomnia to test the API routes

## Walkthrough Video

A walkthrough video demonstrating the functionality of this API can be found at [Demo Video](https://drive.google.com/file/d/1mGPjNyM2sCuqYN9fkzK31K5ro_B7ZapV/view).

## Github Repo

Github Repo can be found here [Nebbs82 Github](https://github.com/Nebbs82/Challenge-17-Social-Network-API)
