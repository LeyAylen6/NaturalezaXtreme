import {Router} from 'express'
import getArticles from './getArticles';
import bulkArticles from './bulkArticles';
const router = Router();

router.post('/bulkArticles', bulkArticles)
router.get('/articles', getArticles)

export default router;