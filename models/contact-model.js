const mongoose = require("mongoose")

const ContacSchema=mongoose.Schema({

    username:{
        type:String,
        require:true
    },
    email:{
        type: String,
        require: true
    },
    message:{
        type: String,
        require: true
    }
})

const Contact=mongoose.model("contacts",ContacSchema);
module.exports=Contact;