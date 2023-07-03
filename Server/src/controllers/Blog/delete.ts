import { AppDataSource } from "../../db";
import { Post } from "../../entities/postEntity";

const deleteBlogController = async (id: number) => {

    const postFound = await AppDataSource.getRepository(Post).findOneBy({ id: id });

    if(!postFound) throw new Error('The post does not exist');

    await AppDataSource.getRepository(Post).delete({ id: id })
    
    return postFound;
}

export default deleteBlogController;