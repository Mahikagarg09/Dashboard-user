const express= require('express');
const mongoose=require('mongoose');
const dotenv= require('dotenv').config();
const cors=require('cors');

const app=express();

//use express.json() to gwt data into json format
app.use(express.json());

//port
const PORT=process.env.PORT || 5500;

//use cors to ensure if port is other than 5500
app.use(cors());

//import routes


//connect to mongodb

mongoose.connect(process.env.DB_CONNECT)
.then(()=> console.log("Database connected"))
.catch(err => console.log(err));

//add port and connect to server
app.listen(PORT,() => console.log("server connected"));