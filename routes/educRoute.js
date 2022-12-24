const router = require('express').Router();
const {getEducation, addEducation, updateEducation, getEducationId, deleteEducation} = require('../controllers/educCtrl');

const educationSchema = require('../models/educModel');

//.......................education.........................

// get request
router.get('/education', getEducation)

// add education user
router.post('/education', addEducation);

// get specific user by id 
router.get('/education/:id',getEducationId);

// update specific user by id 
router.put('/education/update/:id',updateEducation);

// delete specific user by id 
router.delete('/education/:id', deleteEducation);

module.exports = router;