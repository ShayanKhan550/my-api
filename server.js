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
    ]);
});

app.get("/", (req, res) => {
    res.send("API is working!");
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});