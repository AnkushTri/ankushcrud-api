
const User =require("../models/user-moel");
const Contact=require("../models/contact-model")
const Service=require("../models/service-model")

const getAllUsers=async(req,res)=>{
    try{
        const users=await User.find({},{password:0});
        return res.status(200).json({msg:"user fetched succesfully",data:users})
    }catch(error){
        console.log("error while fetching all users by admin",error)
    }
}

const getUserById=async(req,res)=>{
    try{
    const id=req.params.id;
    const user=await User.find({_id:id},{password:0})
    return res.status(200).json({ msg: "User fetch successfuly", data: user })
    }catch(err){
        console.log("error while calling user api",err)
    }

}
//update user
const updateUserById=async(req,res)=>{
        const { id } = req.params; // Extract user ID from request parameters
        try {
            const updatedData = req.body;
            // Check if the contact with the given ID exists
            const existingUser = await User.findById({_id:id});
            if (!existingUser) {
                return res.status(404).json({ message: "User not found" });
            }
            // Update the contact with the new data
            const updatedUser = await User.updateOne({_id:id}, {$set:updatedData,});

            return res.status(200).json({ message: "User updated successfully", data: updatedUser });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Failed to update contact" });
        }
    };

const getAllContacts=async(req,res)=>{
    try{
        const contacts=await Contact.find({});
        return res.status(200).json({msg:"user fetched succesfully",data:contacts})

    }catch(error){
        console.log("error while fetching all users by admin",error)
    }
}
const getAllServices=async(req,res)=>{
    try{
        const services=await Service.find();
        return res.status(200).json({msg:"user fetched succesfully",data:services})

    }catch(error){
        console.log("error while fetching all users by admin",error)
    }
}

const deleteUserById=async(req,res)=>{
    try{
        const id = req.params.id;
    const response = await User.deleteOne({_id:id});
    return res.status(200).json({message:id,resmsg:response})
    }catch(error){
        console.log("error while fetching deteting a user by admin", error)
    }
}

const deleteContactById = async (req,res) => {
    try {
        const id = req.params.id;
        const response = await Contact.deleteOne({ _id: id });
        return res.status(200).json({ message: id, resmsg: response })
    } catch (error) {
        console.log("error while fetching deteting a user by admin", error)
    }
}

const deleteServiceById=async(req,res)=>{
    try {
        const id = req.params.id;
        const response = await Service.deleteOne({ _id: id });
        return res.status(200).json({ message: id, resmsg: response })
    } catch (error) {
        console.log("error while fetching deteting a user by admin", error)
    }
}



module.exports = { 
    getAllUsers, 
    getAllContacts, 
    getAllServices, 
    deleteUserById, 
    deleteContactById,
    deleteServiceById,
    getUserById,
    updateUserById,
};