import { Request, Response } from "express";
import cloudinaryController from "../../controllers/cloudinary/cloudinaryController";
import fileUpload from "express-fileupload";

const cloudinary = async(req: Request, res: Response) => {
    try {
        const image = req.files?.image as fileUpload.UploadedFile;
        const imageToPost = await cloudinaryController(image);

        res.status(200).json(imageToPost);
        
        console.log("File uploaded!")
    
    } catch (error: any) {
        res.status(500).send(error.message)
    }
}

export default cloudinary;