import express from 'express';
import mongoose from 'mongoose';
import projectRoute from './routes/project'
import employeeRoute from './routes/employee'

const app = express();
mongoose.connect('mongodb+srv://nikhil:nikhil@cluster0.mftgu.mongodb.net/pmp')
mongoose.Promise = global.Promise;

app.use(express.json())

app.use("/api/project", projectRoute)
app.use("/api/employee", employeeRoute)

app.listen(8989, ()=>{
    console.log('Server started......')
})