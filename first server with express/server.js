//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(request, response) { 
    // console.log(request);
    response.send("<h1>hello World</>");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});

// written node server.js on the terminal bcz start the port