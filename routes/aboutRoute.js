const router = require('express').Router();
const {getAbout, addAbout, updateAbout, getAboutId, deleteAbout} = require('../controlers/aboutCtrl');


//.......................about.........................

// get request
router.get('/about', getAbout)

// add about user
router.post('/about', addAbout);

// get specific user by id 
router.get('/about/:id', getAboutId);

// update specific user by id 
router.put('/about/update/:id',updateAbout);

// delete specific user by id 
router.delete('/about/:id', deleteAbout);

module.exports = router;