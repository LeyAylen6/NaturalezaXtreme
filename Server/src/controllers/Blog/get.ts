import { AppDataSource } from "../../db";
import { CategoryPost, Post } from "../../entities/postEntity";
import { filterByCategoryPost } from "../../interfaces/filterByCategoryPost";

const getBlogController = async(category?: CategoryPost) => {

    let filter: filterByCategoryPost = {}
    
    if (category) filter.role = category
  
    const postsFound = await AppDataSource.getRepository(Post).find({
        where: Object(filter.role)
    });

    if(!postsFound.length) throw new Error('No posts created yet');
    
    return postsFound;
}

export default getBlogController;