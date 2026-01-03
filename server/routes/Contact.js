const express = require('express');

const router= express.Router();

const {ContactUs} = require('../controllers/ContactUs');

router.post('/contactus', ContactUs);

module.exports = router;
