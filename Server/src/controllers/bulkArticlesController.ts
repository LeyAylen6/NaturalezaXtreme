import { AppDataSource } from "../db"
import { Article } from "../entities/articleEntity"
import articlesData from "../assets"

const bulkArticlesController = async ()=>{

    //Usa el repositorio de la entidad para utilizar el método create
    const articleRepository = AppDataSource.getRepository(Article);

    //mapeamos el arreglo para crear cada artículo 
    const articleEntities = articlesData.map((articleData) =>
        articleRepository.create(articleData)
    );

    //se inserta en la bd
    await articleRepository.insert(articleEntities);
        
    return "Articles created"
}

export default bulkArticlesController
