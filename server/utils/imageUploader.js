const cloudinary = require('cloudinary').v2;

const imageUploder = async(imageurl , folder , height , quality)=>{
    try{
        const options = {
            folder,
            resource_type: "auto",
        }
        if(height){
            options.height = height
        }
        if(quality){
            options.quality = quality;
        }
        return await cloudinary.uploader.upload(imageurl.tempFilePath ,options );
    }catch(e){
        console.log('Error uploading image to cloudinary:', e);
        throw e;
    }

    
}

module.exports = imageUploder;
