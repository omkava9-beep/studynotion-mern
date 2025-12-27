const mongoose= require('mongoose');
const MailSender = require('../utils/Mailsender');

const OtpSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,

    },
    otp:{
        type:Number,
        required:true,

    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expires : 5*60
    }
})

const SendVerificationEmail = async(email , otp)=>{
    try{
        const mailResponse = await MailSender.SendVerificationEmail(email , "Verrification Email :-" , otp);
        console.log("Email Sent Successfully" , mailResponse);

    }catch(e){
        console.error("error occured while sending mail:-",e);
        process.exit(1);
    }
}

OtpSchema.pre('save' , async(next)=>{
    await SendVerificationEmail(this.email , this.otp);
    next();
});
module.exports = mongoose.model('Otp' , OtpSchema);