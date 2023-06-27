
import { AppDataSource } from "../db"; 
import { Article } from "../entities/articleEntity";

const deleteFavoritoController = async(body:any) => {
    const articulo = AppDataSource.getRepository(Article).findBy({id: body.articleId})
    
}

export default deleteFavoritoController;