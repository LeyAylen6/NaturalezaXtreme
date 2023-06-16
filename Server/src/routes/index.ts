import { Router } from 'express'
import getArticles from './articles/getArticles';
import postArticle from './articles/postArticle';
import bulkArticles from './articles/bulkArticles';
import getArticleById from './articles/getArticleById';
import updateArticle from './articles/updateArticle';
import deleteArticle from './articles/deleteArticle';
import postUser from './users/postUser';
// import filterByGender from './filters/filterByGender';
import filters from './filters/filters';

const router = Router();

router.post('/bulkArticles', bulkArticles)
router.post('/articles', postArticle)
router.get('/articles', getArticles)
router.get('/articles/:id', getArticleById)
router.put('/articles', updateArticle)
router.delete('/articles/:id', deleteArticle)

// router.get('/user', getUser)
router.post('/user', postUser)
// router.put('/user', updateUser)
// router.delete('/user/:id', deleteUser)

router.get('/filtered', filters)


export default router;
