const payment = require('../controllers/Payment');

const express = require('express')
const router = express.Router();

router.post('/createorder' , payment.CreateOrder);
router.post('/verifyorder' , payment.VerifyOrder);



module.exports = router;
