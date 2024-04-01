const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    occupation:{
        type:String,
        required:false
    },
    hours:{
        type:Number,
        required:true
    },
    paid:{
        type:String,
        required:true
    }
})

const studentModel = mongoose.model("student",studentSchema);

module.exports = studentModel;