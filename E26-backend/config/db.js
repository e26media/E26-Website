const mongoose =require('mongoose');
// const mongoUrl=process.env.MONGO_URL;


const   connectMongoDb =async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
      console.log("Connect Database");

    }
    catch(err){
        console.log("Not Connect Data base",err);
    }
}
module.exports=connectMongoDb;