 const nodemailer = require('nodemailer');


 const MailSender = async(email , title , body)=>{
    try{
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS
            }
        })

        let info = await transporter.sendMail({
            from:'StudyNotion',
            to:`${email}`,
            subject:  `${title}`,
            html:`<h1>${body}</h1>`
        })

        return info;

    }catch(e){
        console.log(e.message);
        return null;        
    }
 }

 module.exports = MailSender;