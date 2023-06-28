import { Router } from 'express'
import getArticles from './articles/getArticles';
import postArticle from './articles/postArticle';
import bulkArticles from './articles/bulkArticles';
import getArticleById from './articles/getArticleById';
import updateArticle from './articles/updateArticle';
import desactivateArticle from './articles/deactivateArticle';
import postUser from './users/postUser';
import getUsers from './users/getUsers';
import getUserById from './users/getUserById';
import deactivateUser from './users/deactivateUser';
import updateUser from './users/updateUser';
import { postMercadoPago } from './mercadoPago/mercadoPago';
import putShoppingCart from './shoppingCart/putShoppingCart';
import getShoppingCart from './shoppingCart/getShoppingCart';
import getCartById from './shoppingCart/getCartById';
import nodemailerPRUEBAS from './nodemailerTEST/nodemailerPRUEBAS';
import loginRoute from './auth/loginRoute';
import reviewCarts from './shoppingCart/reviewCarts';
import cloudinary from './cloudinaryTEST/cloudinary';
import addFavs from './favs/addFavs';
import getFavsByUserId from './favs/getFavsByUserId';
import deleteFavs from './favs/deleteFavoritos';
import { infoMercadoPago } from './mercadoPago/infoMercadoPago';

const router = Router();

router.post('/bulkArticles', bulkArticles)
router.post('/articles', postArticle)
router.get('/articlefinder', getArticleById)
router.get('/articles', getArticles)
router.put('/articles', updateArticle)
router.put('/articles/:id', desactivateArticle)

router.post('/user', postUser)
router.get('/user', getUsers)
router.get('/user/:id', getUserById)
router.put('/user', updateUser)
router.put('/user/:id', deactivateUser)

router.post('/login', loginRoute)

router.put('/shoppingcart', putShoppingCart)
router.get('/shoppingcart', getShoppingCart)
router.get('/shoppingcart/:id', getCartById)
router.get('/shoppingcart/reviews/:id', reviewCarts)

router.post("/mercadoPago", postMercadoPago)
router.post('/infoMercadoPago',infoMercadoPago)
router.post("/nodemailer", nodemailerPRUEBAS)
router.post("/cloudinary", cloudinary)

router.post("/fav", addFavs)
router.get("/fav/:id", getFavsByUserId)
router.delete("/fav", deleteFavs)



export default router;
