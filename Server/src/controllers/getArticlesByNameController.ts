import { Article } from "../entities/articleEntity"
import { AppDataSource } from "../db"
import { articleStructure } from "../interfaces/articleStructure";

export const getArticlesByNameController = async(name: string) => {

    const articlesFound = await AppDataSource
    .getRepository(Article)
    .find({ 
        where: { 
            name: name 
        } 
    });

    console.log(articlesFound)

    if (articlesFound.length < 0) throw new Error(`Cannot be found articles with the name ${name}`) 

    return articlesFound;
}