const Section = require('../models/Section');
const Subsection = require('../models/Subsection');
const imageUploder = require('../utils/imageUploader');

const createSubSection = async(req ,res) =>{
    try {
        const {sectionId ,title , timeDuration ,description } = req.body;
        
        const video = req.files.videoUpload;
        if(!sectionId || !title || !timeDuration || description || !video){
            return res.status(403).json({
                message:"all fields are required to create a section",
                success:false,
            })
        }
        const cloudinaryUploadedVideo = await imageUploder(video.tempFilePath , process.env.COURSE_THUMBNAIL_FOLDER_NAME );

        const newCreatedSubSection = await Subsection.create({
            sectionId,
            title,
            timeDuration,
            description,
            videoUrl : cloudinaryUploadedVideo.secure_url,
        })

        //now we have to update the section here
        //so we will first get the section according to the given sectionid
        //if we got the section then we just have to insert in that section

        const updatedSection = Section.findByIdAndUpdate(sectionId, {
            $push:{
                subSection:newCreatedSubSection._id
            }
        },{new:true}).populate({
            path:'Section',
            populate:{
                path:'SubSection'
            }
        });


        return res.status(200).json({
            success:true,
            message:"successfully created the new SubSection",
            data:updatedSection,
        })
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Internal Server Error!!",
        })
    }
}

const UpdateSubSection = async(req ,resp)=>{
    try {
        const {sectionId , subSectionId, title , timeDuration , description} = req.body;

        if(!sectionId || !subSectionId ){
            return resp.status(403).json({
                message:'sectionid and subsection id are required for updating the subsection'
            })
        }
        const subSection = await Subsection.findById(subSectionId);
        if(req.files && req.files.video){
            const uploadVideo = req.files.video ;
            const uploadedVideo = await imageUploder(uploadVideo.tempFilePath , process.env.COURSE_THUMBNAIL_FOLDER_NAME);
            subSection.videoUrl = uploadedVideo.secure_url;
            subSection.timeDuration = timeDuration;
        }
        await subSection.save();

        if(title){
            subSection.title = title;
        }
        if(description){
            subSection.description = description;
        }
        const updatedSection = await Section.findById(sectionId).populate('SubSection');

        if(!updatedSection){
            return resp.status(403).json({
                message:'some error occured while fetching the updated section',
                success:false,
            })
        }
        return resp.status(200).json({
            success:true,
            message:'Updated subsection successfully.',
            data : updatedSection
            
        })        
    } catch (error) {
         return resp.status(500).json({
            success:false,
            message:'Something went Wrong while updating Subsection..'
        })   
    }


}

const DeleteSubSection = async(req ,resp)=>{
    try{
        const {sectionId , subsectionId} = req.body;
        if(!sectionId || !subsectionId){
            return resp.status(400).json({
                message:"All fields required to delete the SubSection.",
                success:false,
            })
        }
        const section = await Section.findById(sectionId);
        if(!section){
            return resp.status(404).json({
                message:'Session does not exist.',
                success:false,
            })
        }
        const deleteSection = await Subsection.findByIdAndDelete(subsectionId);
        if(!deleteSection){
            return resp.status(404).json({
                message:'This subSection does not exist so we can nont delete It.',
                success:false,
            })
        }

        const updatedSection = await Section.findByIdAndUpdate(sectionId , {
            $pull :{
                subSection: subsectionId,
            }
        },{new:true,
            runValidators:true
        }).populate('SubSection');


        return resp.status(200).json({
            message: "the subSection is deleted Successfully",
            data : updatedSection,
            success:true,
        });

    }catch(e){
        return resp.status(500).json({
            message:'something went wrong while deleting the data',
            success:false
        })
    }
}
module.exports = {createSubSection,UpdateSubSection , DeleteSubSection};
