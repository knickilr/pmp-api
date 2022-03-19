import mongoose from "mongoose"
const autoIncrement = require('mongoose-sequence')(mongoose)

const ProSchema = new mongoose.Schema({
    _id:{
        type: Number,
        max: 999,
    },
    name:{
        type:String,
        require: true,
        min: 10,
        max: 80,
        unique:true
    },
    description:{
        type:String,
        require: true,
        min: 50,
        max: 300,
    },
    sDate:{
        type: Date,
        required: true
    },
    employe:{
        type: Array,
        default: []
    }
},
{timestamps:true})

ProSchema.plugin(autoIncrement, {start_seq: 100})

export default mongoose.model("Project", ProSchema)
