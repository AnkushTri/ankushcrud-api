const Contact =require("../models/contact-model");

const contactForm = async (req, res) => {
    try {
        const response = req.body;
        const data= await Contact.create(response);
        // console.log(data);
        res.status(200).json({ message: data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "message not delivered" });
    }
};

const hello=async(req,res)=>{
    res.status(200).json("welcome buudyy");
}

module.exports = {contactForm, hello};