const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/"), (req, res) => {
    res.sendFile(path.join(__dirname, ""));
};
app.get("/"), (req, res) => {
    res.sendFile(path.join(__dirname, ""));
};
app.get("/"), (req, res) => {
    res.sendFile(path.join(__dirname, ""));
};


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  