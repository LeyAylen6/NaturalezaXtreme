import { articleStructure } from "../../interfaces/articleStructure";
import { AppDataSource } from "../../db";
import { Shopping_Cart } from "../../entities/shoppingCartEntity";
import { userStructure } from "../../interfaces/userStructure";
import { Shopping_Cart_Article } from "../../entities/shoppingCartArticleEntity";
import { articleCartStructure } from "../../interfaces/articleCartStructure";

const postShoppingCartController = async(user: userStructure, article: articleStructure) => {

    //Busca carrito
    const carts = await AppDataSource.getRepository(Shopping_Cart).find({
        where: { 
            userId: user.id,
            role: 'pending'
        }
    })

    if(carts.length === 0) throw new Error()

    // Busca articulo en el carrito
    const articleFoundInCart  = await AppDataSource.getRepository(Shopping_Cart_Article).findOneBy({ userId: user.id, articleId: article.id })

    // Si el articulo no existe lo agrega
    if(!articleFoundInCart) {

        const newArticle: articleCartStructure = {
            userId: user.id,
            articleId: article.id,
            quantity: 1,
        }

        const articleToCreate = AppDataSource.getRepository(Shopping_Cart_Article).create(newArticle)
        const result = AppDataSource.getRepository(Shopping_Cart_Article).save(articleToCreate)

        return result;

    // Si el articulo existe aumenta quantity en 1 unidad.
    } else {

        const newArticle: articleCartStructure = {
            userId: user.id,
            articleId: article.id,
            quantity: articleFoundInCart.quantity++,
        }

        AppDataSource.getRepository(Shopping_Cart_Article).merge(articleFoundInCart, newArticle)
        const result = AppDataSource.getRepository(Shopping_Cart_Article).save(articleFoundInCart)
        
        return result;
    }
}

export default postShoppingCartController;