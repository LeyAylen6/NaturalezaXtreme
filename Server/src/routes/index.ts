import { Router } from 'express'
import getArticles from './articles/getArticles';
import postArticle from './articles/postArticle';
import bulkArticles from './articles/bulkArticles';
import getArticleById from './articles/getArticleById';
import updateArticle from './articles/updateArticle';
import desactivateArticle from './articles/desactivateArticle';
import mercadopago from 'mercadopago';

import postUser from './users/postUser';
import getUsers from './users/getUsers';
import getUserById from './users/getUserById';
import desactivateUser from './users/desactivateUser';
import updateUser from './users/updateUser';
import { postMercadoPago } from './mercadoPago/mercadoPago';

const router = Router();

router.post('/bulkArticles', bulkArticles)
router.post('/articles', postArticle)
router.get('/articles/:id', getArticleById)
router.get('/articles', getArticles)
router.put('/articles', updateArticle)
router.put('/articles/:id', desactivateArticle)

router.post('/users', postUser)
router.get('/users', getUsers)
router.get('/user/:id', getUserById)
router.put('/user', updateUser)
router.put('/user/:id', desactivateUser)



router.post("/mercadoPago",postMercadoPago);


export default router;
