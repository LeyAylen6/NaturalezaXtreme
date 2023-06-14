import {Router} from 'express'
import getArticles from './getArticles';
import postArticle from './postArticle';
const router = Router();

router.get('/articles', getArticles)
router.post('/articles', postArticle)

export default router;