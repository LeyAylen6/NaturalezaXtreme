import { getRepository } from "typeorm";
import getShoppingCartController from "./getShoppingCartController";
import getCartByIdController from "./getCartByIdController";
import { Article } from "../../entities/articleEntity"


const commentPurchased = async (userId: number) => {
    const carts: number[] = [];
  
    // Busca los carts de un user que estén pagos
    const purchasedCarts = await getShoppingCartController(userId, "complete");
  
    // Arma un arreglo con los ids de carritos
    purchasedCarts.forEach((cart) => {
      carts.push(cart.id);
    });
    
    // Mapea el arreglo y recupera los artículos de cada carrito en un arreglo
    const getArticles = carts.map((cart) => getCartByIdController(cart));
  
    // Espera a que todas las promesas se resuelvan, resolvedArticles es un arreglo de articulos
    const resolvedArticles = await Promise.all(getArticles);


    //Arreglo donde se van a guardar los ids de artículos comprados
    let purchasedArticles: number[] = [];
    //resolvedArticles[0][0].shoppingArticles.map(article => purchasedArticles.push(article.article.id))
  
    //Se guardan los artículos comprados en un arreglo
    resolvedArticles.forEach((cart) => {
        cart[0].shoppingArticles.map(article => purchasedArticles.push(article.article.id))
    });


    //Se recorre el arreglo revisando por cada artículo si tiene o no un comentario con el userId
    const revisedArticles = purchasedArticles.map(async (articleId) => {
      const article = await Article.findOneBy({
        id: articleId
    })      
    if (article) {
        const commented = article.comments
        if(commented) return { id: articleId, name: article.name, image: article.image, commented: true };
        else return { id: articleId, name: article.name, image: article.image, commented: false };
      }

    });
    
    const commentedArticles = await Promise.all(revisedArticles);
    
    return commentedArticles;  
  };
  
  export default commentPurchased;