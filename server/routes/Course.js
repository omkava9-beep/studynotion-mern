//course 
//catagory 
//sections//
//subsections
//rating 

const express = require('express');
const { isInstructor, auth } = require('../middleware/auth');
const { CreateCourse } = require('../controllers/CourseController');
const { CreateSection, DeleteSection } = require('../controllers/SectionController');

const router = express.Router();


router.post('/createcourse' , auth , isInstructor , CreateCourse );
router.post('/createsection' , auth , isInstructor , CreateSection);
router.delete('/deletesection' , auth , isInstructor , DeleteSection);
 

module.exports = router;
