const express =  require("express");

const app = express();

app.use(express.static("public"));

app.get("/", function(req,res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/speakers", function(req, res) {
    res.sendFile(__dirname + "/speakers.html");
})

app.get("/schedule", function(req, res) {
    res.sendFile(__dirname + "/schedule.html");
})

app.get("/register", function(req, res) {
    res.sendFile(__dirname + "/register.html");
})

app.listen(3000, function(req, res) {
    console.log("Server started running on port 3000.");
})