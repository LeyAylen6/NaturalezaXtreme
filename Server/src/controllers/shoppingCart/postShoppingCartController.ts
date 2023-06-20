import { AppDataSource } from "../../db";
import { Shopping_Cart } from "../../entities/shoppingCartEntity";
import { Shopping_Cart_Article } from "../../entities/shoppingCartArticleEntity";
import { articleCartStructure } from "../../interfaces/articleCartStructure";
import { userIdArticleId } from "../../interfaces/userIdArticleIdStructure";

const putShoppingCartController = async( data: userIdArticleId, method?: string) => {

    const newArticle: articleCartStructure = {
        userId: data.userId,
        articleId: data.articleId,
        quantity: 1,
    }
    
    // Crea carrito harcodeado para pruebas
    const cartCreated = await AppDataSource.getRepository(Shopping_Cart).create({ role: 'pending', userId: 16 })
    const cart = await AppDataSource.getRepository(Shopping_Cart).save(cartCreated)
    
    //Busca carrito 
    const carts = await AppDataSource.getRepository(Shopping_Cart).find({
        where: { 
            userId: data.userId,
            role: 'pending'
        }
    })

    if(carts.length === 0) throw new Error()

    // Busca articulo en el carrito
    const articleFoundInCart  = await AppDataSource.getRepository(Shopping_Cart_Article).findOneBy({ userId: data.userId, articleId: data.articleId })

    // Si el articulo no existe lo agrega
    if(!articleFoundInCart) {

        const articleToCreate = AppDataSource.getRepository(Shopping_Cart_Article).create(newArticle)
        const result = AppDataSource.getRepository(Shopping_Cart_Article).save(articleToCreate)

        return result;

    // Si el articulo existe modifica quantity segun la query que se haya pasado
    } else {
        
        if (!method ) throw new Error('must send a valid method')

        if (method !== 'add' && method !== 'subtract' && method !== 'delete') throw new Error('must send a valid method')

        if (method === 'add') newArticle.quantity = articleFoundInCart.quantity + 1 
        if (method === 'subtract') newArticle.quantity = articleFoundInCart.quantity - 1 

        if (method === 'delete') {
            AppDataSource.getRepository(Shopping_Cart_Article).remove(articleFoundInCart)
            return 'Delete Sucefully!'
        }

        AppDataSource.getRepository(Shopping_Cart_Article).merge(articleFoundInCart, newArticle)
        const result = AppDataSource.getRepository(Shopping_Cart_Article).save(articleFoundInCart)
        
        return result;
    }
}

export default putShoppingCartController;