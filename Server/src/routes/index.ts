import {Router} from 'express'
import getArticles from './getArticles';
import postArticle from './postArticle';
import getArticlesByName from './getArticlesByName';
import bulkArticles from './bulkArticles';

const router = Router();

router.post('/bulkArticles', bulkArticles)
router.post('/articles', postArticle)
router.get('/articles', getArticles)
router.get('/articles?name=name', getArticlesByName)

export default router;