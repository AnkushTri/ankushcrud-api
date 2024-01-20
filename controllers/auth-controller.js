
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const User = require('../models/user-moel');

const home = async (req, res) => {
    try {
        res.status(200).send("hello from home")
    } catch (err) {
        res.status(500).send("error while calling")
    }
}

const registration = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email })
        if (userExist) {
            return res.status(400).json({ message: "user already exist" });
        }

        //hash password using bycrypt
        const hash_password = await bcrypt.hash(password, 10);

        const userdata = await User.create({ username, email, phone, password: hash_password });

        // const domatch = await bcrypt.compare(password, hash_password);
        // console.log(domatch);

        try {
            //if password match create a jwt secret token
            const token = jwt.sign({ userId: userdata._id.toString(),email:userdata.email,isAdmin:userdata.isAdmin }, process.env.JWT_TOKEN, { expiresIn: '30d' });
            res.status(201).json({ msg: userdata, token, userId: userdata._id.toString() });

        } catch (error) {
            res.status(500).json({ errr: "not matched" })
        }

    } catch (err) {
        res.status(500).json('error while post api');
    }
}

const login = async (req, res) => {

    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });  

        // Check if the user exists
        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Compare the provided password with the hashed password in the database
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // If the password is correct, create a JWT token
        const token = jwt.sign({ userId: user._id,email:user.email,isAdmin:user.isAdmin }, process.env.JWT_TOKEN, { expiresIn: '30d' });
        // Send the token in the response
        res.status(200).json({message:"Login", token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

//user logic

const user=async(req,res)=>{
    try{
    const userData = req.user;
      return  res.status(200).send({userData});
    }catch(err){
        console.log("error while calling userApi")
    }
    
}

module.exports = { home, registration, login,user }