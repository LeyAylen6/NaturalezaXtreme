import { Article } from "../entities/articleEntity"
import { AppDataSource } from "../db"
import { Like } from "typeorm";

const getArticlesByNameController = async(name: string) => {

    const articlesFound = await AppDataSource.getRepository(Article).find({ 
        where: {
            name: Like(`%${name}%`)
        },
    });

    if (articlesFound.length === 0) throw new Error(`no matches were found for your search`) 

    return articlesFound;
}

export default getArticlesByNameController;