const express = require('express');

const router = express.Router();

const { auth } = require('../middleware/auth');
const { 
  UpdateProfile, 
  DeleteAccount, 
  GetAllUsersDetails,
  GetEnrolledCourses 
} = require('../controllers/ProfileController');

router.put('/updateprofile', auth, UpdateProfile);
router.delete('/deleteaccount', auth, DeleteAccount);

router.get('/getallusers', auth, GetAllUsersDetails);

router.get('/getenrolledcourses', auth, GetEnrolledCourses);

module.exports = router;