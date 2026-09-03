const express = require("express");
const cors = require("cors");   

const app = express();

app.use(cors());
app.use(express.json());

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

app.post("/api/students", (req, res) => {
    const newstudent = req.body;
    
    students.push(newstudent);

    res.status(201).json({
        message:"student added successfully",
        student: newstudent
});
});
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});