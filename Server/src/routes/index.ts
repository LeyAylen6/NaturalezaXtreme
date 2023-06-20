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



router.post("/mercadoPago",postMercadoPago);


export default router;
