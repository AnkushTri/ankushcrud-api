
const mongoose=require('mongoose');

const URL=process.env.DB_URL;

const Connection=async()=>{
    try{
        await mongoose.connect(URL);
        console.log("connected to mongodb");
    }catch(error){
        console.log("erroe while connecting to db")
        process.exit(0)
    }
}

module.exports=Connection