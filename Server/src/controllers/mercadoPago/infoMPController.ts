import axios from "axios";
import { AppDataSource } from "../../db";
import { Article } from "../../entities/articleEntity";
import { Shopping_Cart } from "../../entities/shoppingCartEntity";



const infoMercadoPagoController = async (userId: string) => {

    /*const article = await AppDataSource.getRepository(Article).findOneBy({id:+data[0].article.id!}) */
    console.log(userId);
    

    const { data } = await axios(`http://localhost:3001/shoppingcart?userId=${userId}&status=pending`)
    const product: [] = data.shoppingArticles;
    console.log({data});
    console.log('comienza otro');
    console.log(product);
    console.log({id:+data.id!});
    
    

    const cart = await AppDataSource.getRepository(Shopping_Cart).findOneBy({id:+data.id!})
    cart!.status = 'complete'
    await cart!.save()
    console.log({cart});
    

    // Recorre el array donde estan los articulos para obtener los id y poder modificar los datos de ese articulo
    for(let i = 0; i < product.length;i++) {
        console.log('hasta aqui llegamos');
        console.log(+product[i]['article']['id']);
        console.log(product[i]['quantity']);
        console.log('hasta aqui llegamos 2');
        
        
        
        const article = await AppDataSource.getRepository(Article).findOneBy({id: +product[i]['article']['id']})

        console.log(article);
        

        if (product[i]['article']['type'] === 'shoes') {
            //@ts-ignore
            article!.shoeSize[39] = article!.shoeSize[39] - +product[i]['quantity'];
        } else {
            //@ts-ignore
            article!.size['U'] = article!.size['U'] - +product[i]['quantity'];
        }
        
        await article!.save()

        console.log({despuesSev:article});
    }




}

export default infoMercadoPagoController;