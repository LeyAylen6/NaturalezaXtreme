import { Request, Response } from "express";
import getBlogController from "../../controllers/Blog/get";
import { CategoryPost } from "../../entities/postEntity";

const getBlog = async(req: Request, res: Response)=>{
    try {
        const category = req.query as unknown

        const blogToPost = await getBlogController(category as CategoryPost);

        return res.status(200).json(blogToPost)
    
    } catch (error: any) {
        if(error.message == 'No posts created yet') {
            return res.status(400).send(error.message)
        } 
        res.status(500).send(error.message)
    }
}

export default getBlog;