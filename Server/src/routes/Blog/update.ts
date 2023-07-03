import { Request, Response } from "express";
import updateBlogController from "../../controllers/Blog/update";

const updateBlog = async(req: Request, res: Response)=>{
    try {
        const post = req.body
        const postToUpdate = await updateBlogController(post);
        
        return res.status(200).json(postToUpdate)
    
    } catch (error: any) {
        if(error.message == 'The post does not exist') {
            return res.status(400).send(error.message)
        } 
        res.status(500).send(error.message)
    }
}

export default updateBlog;