import {Router} from 'express'
import getArticles from './getArticles';
import postArticle from './postArticle';
import bulkArticles from './bulkArticles';
import getArticlesById from './getArticlesById';
import updateArticle from './updateArticle';
import postUser from './postUser';
const router = Router();

router.post('/bulkArticles', bulkArticles)
router.post('/articles', postArticle)
router.get('/articles', getArticles)
router.get('/articles/:id', getArticlesById)
router.put('/articles', updateArticle)

// router.get('/user', getUser)
router.post('/user', postUser)
// router.put('/user', updateUser)
// router.delete('/user/:id', deleteUser)



export default router;
