const mongoose = require('mongoose');

const CourseSchema =  new mongoose.Schema({
    courseName:{
        type:String,
    },
    courseDescription:{
        type:String,
    },
    instructor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    whatYouWillLearn:{
        type:String,
    },
    courseContent:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Section"
    }],
    ratingAndReviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"RatingAndReviews",

    }],
    tag:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Tag",
    },
    thumbnail:{
        type:String,
        required : true,
    },
    price :{
        type:Number,
        required:true
    },
    studentsEnrolled :[{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
   }]
    
    

})

module.exports = mongoose.model('Course' , CourseSchema);
