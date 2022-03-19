import mongoose from "mongoose"
const EmpSchema = new mongoose.Schema({
    fName:{
        type:String,
        require: true,
        min: 3,
        max: 50,
    },
    _id:{
        type: Number,
        min: 100000,
        max: 999999,
    }
})

export default mongoose.model("Employee", EmpSchema)