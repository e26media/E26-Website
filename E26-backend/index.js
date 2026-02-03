const express= require('express');
const app=express();
const dotenv = require('dotenv');
const cors = require("cors");
const mongoDB=require('./config/db.js')
app.use(express.json());


// api sections
app.use('/api',require('./routes/blogRoutes.js'))






dotenv.config();//database connection
mongoDB();
app.use(cors());
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});
