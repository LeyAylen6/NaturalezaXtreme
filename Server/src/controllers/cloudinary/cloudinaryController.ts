import fileUpload from "express-fileupload";
const cloudinary = require('cloudinary').v2;
const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

// let CLOUDINARY_URL = `cloudinary://${CLOUDINARY_API_KEY}:${CLOUDINARY_API_SECRET}@${CLOUDINARY_CLOUD_NAME}`

const cloudinaryController = async(image: fileUpload.UploadedFile) => {

    cloudinary.config({ 
        cloud_name: CLOUDINARY_CLOUD_NAME, 
        api_key: CLOUDINARY_API_KEY, 
        api_secret: CLOUDINARY_API_SECRET,
        secure: true
    });

    const infoImage = await cloudinary.uploader.upload(image.tempFilePath)

    return infoImage;
}

export default cloudinaryController;
