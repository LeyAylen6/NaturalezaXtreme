import { AppDataSource } from "../../db";
import { Shopping_Cart_Article } from "../../entities/shoppingCart_ArticleEntity";
import { userIdArticleId } from "../../interfaces/userIdArticleIdStructure";
import getArticlesByIdController from "../articles/getArticleByIdController";
import findOrCreateShoppingCartController from "./findOrCreateShoppingCartController";

const putShoppingCartController = async( data: userIdArticleId[], method?: string) => {

    let result;
    
    for(let i = 0;i<data.length;i++){
        const cart = await findOrCreateShoppingCartController(data[i].userId)

        if(!cart) throw new Error('you must have a cart created to update it')

        // Busca articulo en el carrito
        const itemFound2 = await AppDataSource.getRepository(Shopping_Cart_Article).find({ 
            where: {
                size: data[i].size,
                shoppingCart: { id: cart.id },
                article: { id: data[i].articleId }
            },
            relations: {
                shoppingCart: true,
                article: true  
            }
        });
    
        const article = await getArticlesByIdController(data[i].articleId)
    
        const newArticle: Shopping_Cart_Article = {
            shoppingCart: cart,
            quantity: data[i].quantity,
            size: data[i].size,
            article: article,
        }
    
        let itemFound = itemFound2[0]
    
        // Si el articulo no existe lo agrega
        if(!itemFound) {
            const articleToCreate = AppDataSource.getRepository(Shopping_Cart_Article).create(newArticle)
            result = await AppDataSource.getRepository(Shopping_Cart_Article).save(articleToCreate)
            
            
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
            result = await AppDataSource.getRepository(Shopping_Cart_Article).save(itemFound)
        }

    }


}

export default putShoppingCartController;