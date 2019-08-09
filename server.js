// Server Configurtion
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// JSON Data Array Here?



// HTML Routing
app.get("/"), (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
};
app.get("/tables"), (req, res) => {
    res.sendFile(path.join(__dirname, "tables.html"));
};
app.get("/reserve"), (req, res) => {
    res.sendFile(path.join(__dirname, "reserve.html"));
};

// Gets Data for all tables
app.get("/api/tables", function (req, res) {
    return res.json(tables);
});
// Gets data for all people on waitlist
app.get("/api/waitlist", function (req, res) {
    return res.json(waitList);
});

// Returns JSON data for specified table
app.get("/api/table/:person", (req, res) => {
    var chosen = req.params.person;
    console.log(chosen);
    for (var i = 0; i < tables.length; i++) {
        if (chosen === tables[i].routeName) {
            return res.json(tables[i]);
        }
    }
    return res.json(false);
});

// Returns JSON data for specified person on Wait List
app.get("/api/waitlist/:person", (req, res) => {
    var chosen = req.params.person;
    console.log(chosen);
    for (var i = 0; i < waitList.length; i++) {
        if (chosen === waitList[i].routeName) {
            return res.json(waitList[i]);
        }
    }
    return res.json(false);
});


// Server Listener
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});