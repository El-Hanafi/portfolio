const router = require('express').Router();
const {getProject, addProject, updateProject, getProjectId, deleteProject} = require('../controllers/projectCtrl');

const projectSchema = require('../models/projectModel');

//.......................project.........................

// get request
router.get('/project', getProject)

// add project user
router.post('/project', addProject);

// get specific user by id 
router.get('/project/:id',getProjectId);

// update specific user by id 
router.put('/project/update/:id',updateProject);

// delete specific user by id 
router.delete('/project/:id', deleteProject);

module.exports = router;