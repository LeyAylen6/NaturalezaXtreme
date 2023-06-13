import {Router} from 'express'
import getArticles from './getArticles';
const router = Router();

router.get('/articles', getArticles)

export default router;