
const router = require('express').Router();
const cloudinary = require('cloudinary');
const fs = require('fs');

//We will upload image to cloudinary

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})


module.exports = router;