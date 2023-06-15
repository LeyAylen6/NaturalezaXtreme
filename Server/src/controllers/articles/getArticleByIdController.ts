import { AppDataSource } from "../../db";
import { Article } from "../../entities/articleEntity"

const getArticlesByIdController = async(id: number) => {

    const articleFound = await AppDataSource.getRepository(Article).findOneBy({
        id: id
    })

    if (!articleFound) throw new Error('There is no article with that id')
    
    return articleFound;
}

export default getArticlesByIdController;
