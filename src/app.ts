import express from 'express';
import mongoose from 'mongoose';

const app = express();
mongoose.connect('mongodb+srv://nikhil:nikhil@cluster0.mftgu.mongodb.net/pmp')
mongoose.Promise = global.Promise;

app.listen(8989, ()=>{
    console.log('Server started......')
})