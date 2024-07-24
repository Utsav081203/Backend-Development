// asynchronous way:
import express from "express";
// const express = require('express');
// Two ways to import express
// change in dependencies as we do so (type)
// module or common
// bring synchronously or asynchronously

const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is a joke1'
        },
        {
            id: 2,
            title: 'A joke',
            content: 'This is a joke2'
        },
        {
            id: 3,
            title: 'A joke',
            content: 'This is a joke3'
        },
        {
            id: 4,
            title: 'A joke',
            content: 'This is a joke4'
        }
    ];
    res.send(jokes);
});

const port = process.env.PORT || 5000;
// if env port not defined then hard coded port number assigned

app.listen(port, () => {
    console.log(`Server at https://localhost:${port}`);
});