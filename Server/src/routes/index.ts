import {Router} from 'express'
import getArticles from './getArticles';
import postArticle from './postArticle';
import bulkArticles from './bulkArticles';

const router = Router();

router.post('/bulkArticles', bulkArticles)
router.post('/articles', postArticle)
router.get('/articles', getArticles)

export default router;