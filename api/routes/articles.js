const express = require('express');
const router = express.Router();

const {
    getAllArticles,
    getArticle,
    updateArticle,
    deleteArticle,
    createArticle
} = require('../controllers/articles');

router.get('/', getAllArticles);
router.get('/:artcleId', getArticle);
router.post('/', createArticle);
router.patch('/:artcleId', updateArticle);
router.delete('/:artcleId', deleteArticle);

module.exports = router;