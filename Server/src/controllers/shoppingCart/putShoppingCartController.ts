import { AppDataSource } from "../../db";
import { Shopping_Cart_Article } from "../../entities/shoppingCart_ArticleEntity";
import { articleCartStructure } from "../../interfaces/articleCartStructure";
import { userIdArticleId } from "../../interfaces/userIdArticleIdStructure";
import getArticlesByIdController from "../articles/getArticleByIdController";
import findOrCreateShoppingCartController from "./findOrCreateShoppingCartController";

const putShoppingCartController = async( data: userIdArticleId, method?: string) => {
    
    const cart = await findOrCreateShoppingCartController(data.userId)

    if(!cart) throw new Error('you must have a cart created to update it')

    // Busca articulo en el carrito
    const itemFound = await AppDataSource.getRepository(Shopping_Cart_Article).findOneBy({ 
        shoppingCartId: cart.id as any,
        article: data.articleId as any
    });

    // console.log(itemFound.articleId)
    const article = await getArticlesByIdController(data.articleId)

    const newArticle: any = {
        shoppingCartId: cart.id,
        quantity: 1,
        article: article,
    }

    // Si el articulo no existe lo agrega
    if(!itemFound) {
        const articleToCreate = AppDataSource.getRepository(Shopping_Cart_Article).create(newArticle)
        const result = await AppDataSource.getRepository(Shopping_Cart_Article).save(articleToCreate)

        return result;
        
    // Si el articulo existe modifica quantity segun la query que se haya pasado
    } else {
        
        if (!method ) throw new Error('must send a valid method')

        if (method !== 'add' && method !== 'subtract' && method !== 'delete') throw new Error('must send a valid method')

        if (method === 'add') newArticle.quantity = itemFound.quantity + 1 
        
        if (itemFound.quantity >= 2 && method === 'subtract') newArticle.quantity = itemFound.quantity - 1 
        
        if ((itemFound.quantity <= 1 && method === 'subtract') || method === 'delete' ) {
            AppDataSource.getRepository(Shopping_Cart_Article).remove(itemFound)
            return 'Delete Sucefully!'
        }

        AppDataSource.getRepository(Shopping_Cart_Article).merge(itemFound, newArticle)
        const result = AppDataSource.getRepository(Shopping_Cart_Article).save(itemFound)
        
        return result;
    }
}

export default putShoppingCartController;