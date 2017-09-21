const express = require("express");

const app = express();
const port = 1994;

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`todo-list-api listening on port ${port}!`));
