const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    gender : {
        type:String ,
        required : true,
        enum:['Male' , 'Female' , 'Others']
    },
    dateOfBirth : {
        type:String,

    },
    about:{
        type:String,
        trim : true,

    },
    contact:{
        type:Number,
        trim:true,
    },
    linkedinProfile:{
        type:String,
    }
})

module.exports = mongoose.model('Profile' , ProfileSchema);
