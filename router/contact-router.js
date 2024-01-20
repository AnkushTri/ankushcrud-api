
// const contactForm = require("../controllers/contact-controller")
const express = require("express");
const router= express.Router();

const contactValidateSchema=require("../validators/contact-validator");
const validators=require("../middlewares/validate-middleware");

const {contactForm,hello} = require("../controllers/contact-controller");

// router.route("/contact").post(contactForm);
router.post('/contact', validators(contactValidateSchema), contactForm);
router.get('/hello',hello);

module.exports = router;



