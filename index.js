require('dotenv').config();

const express=require('express');
const cors =require('cors')
const router=require('./router/route');
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const adminRoute=require("./router/admin-router");
const Connection = require('./utills/db')

const errorMiddleware=require('./middlewares/error-middleware')

const app=express();
app.use(express.json());
app.use(cors());

app.use('/api/auth',router);
app.use("/api/form", contactRoute);
app.use("/api/", serviceRoute);
app.use("/api/admin", adminRoute);

app.use(errorMiddleware);

app.get('/', (req, res) => {
    res.send('You can use this api for signup, login, validation, contact us, services and much more')
})

Connection();
const PORT=process.env.PORT || 5000;

// const PORT=5000;
app.listen(PORT,()=>{
    console.log("app is running on port ",PORT)
})