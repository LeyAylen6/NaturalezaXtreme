import { AppDataSource } from "../../db";
import { Shopping_Cart } from "../../entities/shoppingCartEntity";
import { Shopping_Cart_Article } from "../../entities/shoppingCartArticleEntity";
import { articleCartStructure } from "../../interfaces/articleCartStructure";

interface userIdArticleId {
    userId: number, 
    articleId: number
}

const postShoppingCartController = async({ userId, articleId }: userIdArticleId) => {
console.log('entre')
    const cartCreated = await AppDataSource.getRepository(Shopping_Cart).create({ role: 'pending', userId: 16 })
    const cart = await AppDataSource.getRepository(Shopping_Cart).save(cartCreated)
    console.log(cart)

    //Busca carrito
    const carts = await AppDataSource.getRepository(Shopping_Cart).find({
        where: { 
            userId: userId,
            role: 'pending'
        }
    })

    if(carts.length === 0) throw new Error()

    // Busca articulo en el carrito
    const articleFoundInCart  = await AppDataSource.getRepository(Shopping_Cart_Article).findOneBy({ userId: userId, articleId: articleId })

    // Si el articulo no existe lo agrega
    if(!articleFoundInCart) {

        const newArticle: articleCartStructure = {
            userId: userId,
            articleId: articleId,
            quantity: 1,
        }

        const articleToCreate = AppDataSource.getRepository(Shopping_Cart_Article).create(newArticle)
        const result = AppDataSource.getRepository(Shopping_Cart_Article).save(articleToCreate)

        return result;

    // Si el articulo existe aumenta quantity en 1 unidad.
    } else {

        const newArticle: articleCartStructure = {
            userId: userId,
            articleId: articleId,
            quantity: articleFoundInCart.quantity++,
        }

        AppDataSource.getRepository(Shopping_Cart_Article).merge(articleFoundInCart, newArticle)
        const result = AppDataSource.getRepository(Shopping_Cart_Article).save(articleFoundInCart)
        
        return result;
    }
}

export default postShoppingCartController;