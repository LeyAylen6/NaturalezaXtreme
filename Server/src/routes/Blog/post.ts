import { Request, Response } from "express";
import postBlogController from "../../controllers/Blog/post";

const postBlog = async(req: Request, res: Response)=>{
    try {
        const post = req.body
        const { name, content, image, role } = post

        if (!name || !content || !image || !role ) throw new Error('missing data')

        const blogToPost = await postBlogController(post);
        
        return res.status(200).json(blogToPost)
    
    } catch (error: any) {
        if(error.message == 'missing data' || error.message == 'There is already a post with that name and that role') {
            console.log(error)
            return res.status(400).send(error.message)
        } 
        res.status(500).send(error.message)
    }
}

export default postBlog;