router.post('/bulkArticles', bulkArticles)
router.post('/articles', postArticle)
router.get('/articles', getArticles)
router.get('/articles/:id', getArticlesById)
router.put('/articles', updateArticle)
// router.delete('/articles/:id', deleteArticle)

export default router;