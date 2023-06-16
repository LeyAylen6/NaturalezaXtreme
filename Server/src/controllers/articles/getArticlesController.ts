import { AppDataSource } from "../../db"
import { Article } from "../../entities/articleEntity";
const articleRepository = AppDataSource.getRepository(Article);
import { paginado } from "../../utils/paginado";



const getArticlesController = async(offset:number, limit:number ) => {
    const count = await articleRepository.count();
    
    
    const allArticles = await articleRepository.find({
        skip:offset,
        take:limit
    });
    
    const pag = paginado(offset,limit,count)

    if(allArticles.length === 0) throw new Error ("No hay articulos para mostar");
    return {...pag,allArticles};
}

export default getArticlesController;
