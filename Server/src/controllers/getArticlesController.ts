import { AppDataSource } from "../db"
import { Article } from "../entities/articleEntity";
const articleRepository = AppDataSource.getRepository(Article);


const getArticlesController = async()=>{

    const allArticles = await articleRepository.find();
    if(!allArticles) throw new Error ("No hay articulos para mostar");
    return allArticles;
}

export default getArticlesController;
