//here we have to give the user link on the email and 
//when user clicks on the link he will be directed to the reset password page 
//the password can be recreated from clicking the link
//the password and confirm password input is required 
//type and click on change password 
//the password is changed successfully


//step-1 click on forget password
//step-2 enter email and submit 
//step-3 send a link to protected route for changing the password of that email
//step-4 change password 


const { response } = require('express');
const User = require('../models/User');
const MailSender = require('../utils/Mailsender');
const crypto = require('crypto');


const ResetPasswordToken = async(req , resp)=>{
    try {
        const {email} = req.body;

        const user = await User.findOne({email});
        if(!user){
            return resp.status(400).json({
                success:false,
                message:'Email does not exist',
            })
        }

        const token = crypto.randomUUID();

        const updatedDetails = User.findByIdAndUpdate({email:email} , {
            token:token ,
            resetPasswordExpires: Date.now()+(1000*5*60)
        }, {new :true});
        console.log(updatedDetails);

        const url = `https://localhost:3000/update-password/${token}`;

        await MailSender(email , 'Reset Password Link' , `Password reset link :- ${url}`);

        return resp.status(200).json({
            success:true,
            message:'Email sent successfully.'
        })
    } catch (error) {
        return resp.status(500).json({
            success:false,
            message:'Something went wrong in reset Password.'
        })
    }
   

}

const ResetPassword = async(req , resp)=>{
    
    try{
        const {token,password , confirmPassword} = req.body;
        if(password!== confirmPassword){
            return resp.status(500).json({
                success:false,
                message:'Please enter the same Confirm password.'
            });
        }
        const user= await User.findOne({token:token});
        if(!user){
            return resp.status(400).json({
                success:false,
                message:'Invalid token or token has been expired.'
            })
        }
        if(user.resetPasswordExpires > Date.now()){
            return resp.status(400).json({
                success:false,
                message:'Token has been expired.'
            })
        }
        const hashedPassword = await bcrypt.hash(password , 10);
        user.password = hashedPassword;
        user.token = undefined;
        user.resetPasswordExpires = undefined;

        await user.save();

    }catch(e){
        console.log(e);
        return resp.status(500).json({
            success:false,
            message:'Something went wrong in resetting password.'
        })
    }
}

module.exports = {ResetPasswordToken , ResetPassword};