import { AppDataSource } from "../../db";
import { Post } from "../../entities/postEntity";

const updateBlogController = async(post: Post) => {

    const postFound = AppDataSource.getRepository(Post).findOneBy({ id: post.id });

    if(!postFound) throw new Error('The post does not exist') 

    const newPost = AppDataSource.getRepository(Post).save(post);

    return newPost;
}

export default updateBlogController;