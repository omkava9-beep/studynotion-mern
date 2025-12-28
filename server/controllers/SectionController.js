const Course = require("../models/Course");
const Section = require("../models/Section");


const CreateSection = async(req , res)=>{
    try{
        const {sectionName , courseId} = req.body;

        if(!courseId || !sectionName){
            return res.status(400).json({
                success:false,
                message:"missing field in sectionCreation",
            })
        }

        const newSection = await Section({
            sectionName 
        });

        const updatedCourse = await Course.findById({courseId} , {
            $push:{ 
                courseContent:newSection._id
            }
        },{new:true}).populate(
            {
                path:'Section',
                populate:{
                    path:'SubSection'
                }
            }
        )

        return res.status(200).json({
            success:true,
            message: "New section created Successfully",
            data : updatedCourse,
        })
    }catch(e){
        console.log("error occured in section controller :-" , e);
        return res.status(500).json({
            success:false,
            message:"Something went wrong",
        })

    }

}

const UpdateSection = async(req,res)=>{
    try{
        const {courseId, sectionName , sectionId} = req.body;

        if(!sectionName || !courseId ||!sectionId){
            return res.status(500).json({
                success:false, 
                message:"All fields required."
            })
        }
        await Section.findByIdAndUpdate(sectionId , {sectionName} , {new:true});

        const updatedCourse = await Course.findById(courseId)
        .populate({
            path:'courseContent',
            populate:{
                path:'SubSection',
            }
        })
        return res.status(200).json({
            success: true,
            message: "Section updated successfully",
            data: updatedCourse
        });
    }catch(e){
        console.log(e);
        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        });
    }
}

const DeleteSection = async(req , res)=>{
    
    try {
        const {sectionId , courseId} = req.body;
        if(!sectionId || courseId){
            return res.status(400).json({
                success:false,
                message:"All fields required to Delete Section"
            })
        }
        await Section.findByIdAndDelete(sectionId);
        const updatedCourse = await Course.findByIdAndUpdate(courseId , {
            $pull:{
                courseContent:sectionId,
            }
        },{new:true}).populate({
            path:'courseContent',
            populate:{
                path:'SubSection'
            }
        })

        return res.status(200).json({
            success:true,
            message:"Section deleted successfully",
            data:updatedCourse
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Internal Server Error while deleting section"
        })
    }
}
module.exports = {CreateSection , UpdateSection,DeleteSection};