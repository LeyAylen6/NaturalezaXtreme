import { Request, Response } from "express";
import deleteBlogController from "../../controllers/Blog/delete";

const deleteBlog = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const blogToPost = await deleteBlogController(Number(id));
        
        return res.status(200).json(blogToPost);
    
    } catch (error: any) {
        res.status(500).send(error.message);
    }
}

export default deleteBlog;