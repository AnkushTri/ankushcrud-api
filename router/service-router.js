const express=require("express");
const serviceData = require("../controllers/service-controller");

const router=express.Router();

router.get('/service',serviceData);
module.exports=router;