import { AppDataSource } from "../../db";
import { Post } from "../../entities/postEntity";

const postBlogController = async(post: Post) => {

    if (!post.active) post.active = true;

    const postFound = await AppDataSource.getRepository(Post).find({
        where: {
            name: post.name,
            role: post.role
        }
    });

    if(postFound.length) throw new Error('There is already a post with that name and that role');

    const newPost = AppDataSource.getRepository(Post).create(post);
    AppDataSource.getRepository(Post).save(newPost);

    return newPost;
}

export default postBlogController;