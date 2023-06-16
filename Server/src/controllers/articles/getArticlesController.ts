import { all } from "axios";
import { AppDataSource } from "../../db"
import { Article } from "../../entities/articleEntity";
const articleRepository = AppDataSource.getRepository(Article);

const getArticlesController = async(offset:number, limit:number ) => {
    
    const count = await articleRepository.count();
    let next = '';
    let prev = '';

    if(offset + limit >= count) next = 'null'
    else next = `http://localhost:3002/articles?offset=${offset + limit}&limit=${limit}`

    if(offset <= 0) prev = 'null'
    else prev = `http://localhost:3002/articles?offset=${offset - limit}&limit=${limit}`

    let pag = {
        count,
        next,
        prev
    }
    
    const allArticles = await articleRepository.find({
        skip: offset,
        take: limit
    });
    console.log(allArticles)


    if(allArticles.length === 0) throw new Error ("No hay articulos para mostar");
    return {...pag,allArticles};
}

export default getArticlesController;
