const { z } = require("zod");

// Creating an object schema
const messageValidateSchema = z.object({
    username: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be at least of 3 characters" })
        .max(255, { message: "Name must not be more than 255 characters" }),
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "Email must be at least of 3 characters" })
        .max(255, { message: "Email must not be more than 255 characters" }),
    message: z
        .string({ required_error: "Message is required" })
        .trim()
        .min(4, { message: "message must be at least of 4 characters" }),

});

module.exports = messageValidateSchema; 