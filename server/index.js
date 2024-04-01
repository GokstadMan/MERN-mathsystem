const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const studentModel = require("./students/mathStudents");

app = express();
app.use(express.json());

app.use(cors());

// const port = 5000;¨
const port = 7500;



mongoose.connect("mongodb+srv://boehman:52LRgK1YpOb9LiZG@cluster0.rcocwhj.mongodb.net/mathstudents?retryWrites=true&w=majority");

//add a student:
app.post("/add-user",async(req,res)=>{
    const student = req.body;

    if(!student.firstName ||
        !student.lastName ||
        !student.age ||
        !student.occupation ||
        !student.hours ||
        !student.paid) {
        res.send({error:"Please fill in something! Do not leave only blanks.."});
        return;
    }   

    const newStudent = new studentModel(student);
    await newStudent.save();

    res.json(student);
})

//get all students:
app.get("/get-users",async(req,res)=>{
     const findings = await studentModel.find();
     res.send(findings);
})

//get one student:
app.get("/get-user/:id", async(req,res)=>{
    const { id } = req.params;
    const finding = await studentModel.findById(id);
    
    res.send(finding);
})

//delete one student:
app.delete("/delete-user/:id", async(req,res)=>{
    const { id } = req.params;
    const finding = await studentModel.findByIdAndDelete(id);

    res.send(finding);
})

//update a student:
app.put("/update-user/:id", async(req,res)=>{
    const { id } = req.params;
    const updatedStudent = await studentModel.findByIdAndUpdate(id,req.body);

    if(!updatedStudent.firstName ||
        !updatedStudent.lastName ||
        !updatedStudent.age ||
        !updatedStudent.occupation ||
        !updatedStudent.hours ||
        !updatedStudent.paid) {
        res.send({error:"Please fill in something! Do not leave only blanks.."});
        return;
    }   

    res.send(updatedStudent);
})



app.listen(port,()=>{
    console.log("Working on port ", port)
})




