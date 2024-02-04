// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Set up the server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create an array of comments
var comments = [];

// Get all comments
app.get('/comments', function(req, res) {
    res.json(comments);
});

// Add a comment
app.post('/comments', function(req, res) {
    comments.push(req.body);
    res.json(req.body);
});

// Get a comment by id
app.get('/comments/:id', function(req, res) {
    res.json(comments[req.params.id]);
});

// Update a comment by id
app.put('/comments/:id', function(req, res) {
    comments[req.params.id] = req.body;
    res.json(req.body);
});

// Delete a comment by id
app.delete('/comments/:id', function(req, res) {
    comments.splice(req.params.id, 1);
    res.json(req.body);
});

// Start the server
app.listen(3000, function() {
    console.log('Server is running on port 3000');
});
