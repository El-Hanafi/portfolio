const router = require('express').Router();
const {getExperience, addExperience, updateExperience, getExperienceId, deleteExperience} = require('../controllers/experienceCtrl');

const experienceSchema = require('../models/experienceModel');

//.......................experience.........................

// get request
router.get('/experience', getExperience)

// add experience user
router.post('/experience', addExperience);

// get specific user by id 
router.get('/experience/:id',getExperienceId);

// update specific user by id 
router.put('/experience/update/:id',updateExperience);

// delete specific user by id 
router.delete('/experience/:id', deleteExperience);

module.exports = router;