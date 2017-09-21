"use strict";

var express = require("express");

var app = express();
var port = 1994;

app.get("/", function (req, res) {
  return res.send("Hello World!");
});

app.listen(port, function () {
  return console.log("todo-list-api listening on port " + port + "!");
});