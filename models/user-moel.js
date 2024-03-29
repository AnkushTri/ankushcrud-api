const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    phone:{
        type: String,
        require: true,
    },
    password:{
        type: String,
        require: true,
    },
    isAdmin:{
        type:Boolean,
        default:false
    },

})



const User=mongoose.model('users',userSchema);

module.exports=User;