const User = require('../models/User');
const Tag = require('../models/Catagory');
const Catagory = require('../models/Catagory');

const CreateCatagory = async(req ,resp) =>{


    try {
        const {name , description} = req.body;

        if(!name||!description){
            return resp.status(403).json({
                success:false,
                message: "All fields are required",
            })
        }

        const newTag = await Catagory.create({name:name , description:description});

        console.log(newTag);

        return resp.status(200).json({
            message: 'New tag created Successfully',
            success: true,
        })

    } catch (error) {
        console.log('error ocuured while creating a Tag:- ',error);
        resp.status(500).json({
            message:'something went wrong while creating a Tag',
            success:false,

        })
        process.exit(1);        
    }
    

}
const GetAllCatagory = async(req,resp) =>{
    try {
        const allCatagory = await Tag.find({}).populate('courses');
        return resp.status(200).json({
            data:allCatagory,
            success:true,
            message:"All tags are fetched successfully",
        })
    } catch (error) {
        resp.status(500).json({
            message:`something went wrong while fetching the tags data:- ${error.message}`,
            success:false
        })
    }
}

module.exports = {CreateCatagory , GetAllCatagory};
