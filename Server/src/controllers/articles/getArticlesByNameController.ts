import { Article } from "../../entities/articleEntity"
import { AppDataSource } from "../../db"
import { ILike } from "typeorm";

const getArticlesByNameController = async(name: string) => {

    const articlesFound = await AppDataSource.getRepository(Article).find({ 
        where: {
            name: ILike(`%${name}%`)
        },
    });

    if (articlesFound.length === 0) throw new Error(`no matches were found for your search`)

    return articlesFound;
}

export default getArticlesByNameController;