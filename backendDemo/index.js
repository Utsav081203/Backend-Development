// This is basically a server since it listens for a request and sends response
// terminal doesn't close since contantly listening for requests at the ports
// to terminate listening and close server, we ctrl+c

const express = require('express');
require('dotenv').config();
// import express from "express"
const app = express(); // create an instance of express
const port = 4000;  // server listens at some port
const githubData={
  "login": "mojodna",
  "id": 45,
  "node_id": "MDQ6VXNlcjQ1",
  "avatar_url": "https://avatars.githubusercontent.com/u/45?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/mojodna",
  "html_url": "https://github.com/mojodna",
  "followers_url": "https://api.github.com/users/mojodna/followers",
  "following_url": "https://api.github.com/users/mojodna/following{/other_user}",
  "gists_url": "https://api.github.com/users/mojodna/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/mojodna/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/mojodna/subscriptions",
  "organizations_url": "https://api.github.com/users/mojodna/orgs",
  "repos_url": "https://api.github.com/users/mojodna/repos",
  "events_url": "https://api.github.com/users/mojodna/events{/privacy}",
  "received_events_url": "https://api.github.com/users/mojodna/received_events",
  "type": "User",
  "site_admin": false
};

app.get('/', (req, res) => {
  res.send('Hello World!')
});
// listen home route ('/')
// if request arrives, execute callback

app.get('/twitter', (req, res) => {
  res.send(`<h1>Hello</h1>`);
});

app.get('/login', (req, res) => {
  res.send('<a href="www.google.com">Click</a>');
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
// listen at port, and execute callback when get a request at that port

app.get('/github', (req, res) => {
  res.json(githubData);
});