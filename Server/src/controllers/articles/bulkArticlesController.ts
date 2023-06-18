import { Article } from "../../entities/articleEntity";
import articlesData from "../../assets";

const bulkArticlesController = async () => {

    //interface de respuesta cuando hay artículos duplicados, se podría agregar que informe cantidad de creados
    let responseNotFullCreated: {
        message: string,
        not_generated_articles: number,
        articlesDuplicated: any
    };

    // Se buscan todos los articleIDs existentes en la base de datos
    const existingArticles = await Article.find();
    const existingArticleIDs = existingArticles.map((article) => article.articleID);

    // Se filtran un arreglo con los artículos que ya existen en la base de datos
    const duplicatedArticlesData = articlesData.filter(
    (articleData) => existingArticleIDs.includes(articleData.articleID)
    );

    // Se filtran los datos para excluir los que ya existen en la base de datos
    const filteredArticlesData = articlesData.filter(
    (articleData) => !existingArticleIDs.includes(articleData.articleID)
    );

    // Mapea y crea las entidades solo para los artículos no duplicados
    const articleEntities = filteredArticlesData.map((articleData) =>
    Article.create(articleData)
    );

    // Inserta en la base de datos solo los artículos no duplicados
    await Article.insert(articleEntities);

    if(duplicatedArticlesData.length) {
        responseNotFullCreated = {message: "There ara some duplicatad articles that wheren't generated. Not duplicated articles where successfully created", not_generated_articles: duplicatedArticlesData.length ,articlesDuplicated: duplicatedArticlesData};
        return responseNotFullCreated;
        }
    return "Articles successfully created";
};

export default bulkArticlesController;
