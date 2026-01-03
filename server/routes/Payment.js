const {CapturePayment ,VerifySignature} = require('../controllers/Payment');

const express = require('express')
const router = express.Router();

router.post('/createorder' , CapturePayment);
router.post('/verifyorder' , VerifySignature);



module.exports = router;
 