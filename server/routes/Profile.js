const express = require('express');

const router = express.Router();

const { auth } = require('../middleware/auth');
const { 
  UpdateProfile, 
  DeleteAccount, 
  GetAllUsersDetails,
  GetEnrolledCourses 
} = require('../controllers/ProfileController');

// Profile Routes
// Route to update user profile (protected)
router.put('/updateprofile', auth, UpdateProfile);

// Route to delete user account (protected)
router.delete('/deleteaccount', auth, DeleteAccount);

// Route to get all users details (protected)
router.get('/getallusers', auth, GetAllUsersDetails);

// Route to get enrolled courses for a user (protected)
router.get('/getenrolledcourses', auth, GetEnrolledCourses);

module.exports = router;