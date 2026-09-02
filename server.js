const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const students = [
    {
        id: 1,
        name: "Himanshu",
        course: "B.Tech"
    },
    {
        id: 2,
        name: "Rahul",
        course: "BCA"
    },
    {
        id: 3,
        name: "Aman",
        course: "B.Tech"
    }
];

app.get("/api/students", (req, res) => {
    res.json(students);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});