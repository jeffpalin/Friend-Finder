// ===============================================================================
// LOAD DATA
// We are linking our routes to a "data" source.
// This data source holds an array of information on friends.
// ===============================================================================

var friendsData = require("../data/friends");
var userData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
    // API GET Request
    // Below code handles when users "visit" a page.
    // When a user visits a link (ex: localhost:PORT/api/admin... they are shown a
    // JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array.
    // Then the server saves the data to the friendsData array)
    // ---------------------------------------------------------------------------

    app.post("/api/friends", function(req, res) {

        userData.push(req.body);
        res.json(userData);
        console.log(userData);

    });

    //Compare scores of all users and pick the one with the least variance



};