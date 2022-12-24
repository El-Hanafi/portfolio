
const router = require('express').Router();
const {getAbout, addAbout, updateAbout, getAboutId, deleteAbout} = require('../controllers/aboutCtrl');

const aboutSchema = require('../models/aboutModel');
//.......................about.........................

// get request
router.get('/about', getAbout)

// add about user
router.post('/about', addAbout);

// get specific user by id 
router.get('/about/:id',getAboutId);

// update specific user by id 
router.put('/about/update/:id',updateAbout);

// delete specific user by id 
router.delete('/about/:id', deleteAbout);

module.exports = router;