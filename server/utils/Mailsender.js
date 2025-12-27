 const nodemailer = require('nodemailer');


 const MailSender = async(email , title , body)=>{
    try{
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port:587,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS
            }
        })

        let info = transporter.sendMail({
            from:'StudyNotion',
            to:`${email}`,
            subject:  `${title}`,
            html:`${body}`
        })

        return info;

    }catch(e){
        console.log(e.message);
        process.exit(1);        
    }
 }

 module.exports = MailSender;