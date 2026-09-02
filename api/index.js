const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/users", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Shayan",
            role: "Frontend Developer",
        },
        {
            id: 2,
            name: "Ali",
            role: "Backend Developer",
        },
        {
            id: 3,
            name: "nimra",
            role: "Dataanalyst",
        },
        {
            id: 4,
            name: "Usama",
            role: "Dataanalyst",
        },
    ]);
});

app.get("/", (req, res) => {
    res.send("API is working!");
});

module.exports = app;