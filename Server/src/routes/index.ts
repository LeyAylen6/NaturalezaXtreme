import {Router} from 'express'
import getArticles from './getArticles';
import postArticle from './postArticle';
import getArticlesByName from './getArticlesByName';
import bulkArticles from './bulkArticles';
import getArticlesById from './getArticlesById';
import updateArticle from './updateArticle';
const router = Router();

router.post('/bulkArticles', bulkArticles)
router.post('/articles', postArticle)
router.get('/articles', getArticles)
router.get('/articles/:id', getArticlesById)
router.put('/articles', updateArticle)
// router.delete('/articles/:id', deleteArticle)

export default router;
