import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import projectRoute from './routes/project'
import employeeRoute from './routes/employee'


const app = express();
const port = process.env.PORT || 8989
mongoose.connect('mongodb+srv://nikhil:nikhil@cluster0.mftgu.mongodb.net/pmp')
mongoose.Promise = global.Promise;

app.use(express.json())

app.use(cors({
    origin: '*'
}));
app.use("/api/project", projectRoute)
app.use("/api/employee", employeeRoute)

app.listen(port, ()=>{
    console.log('Server started......', port)
})