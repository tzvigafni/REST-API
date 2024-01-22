const express = require('express');
const router = express.Router();

const {
    getAllArticles,
    updateArticle,
    deleteArticle,
    createArticle
} = require('../controllers/articles');

router.get('/', getAllArticles);
router.post('/', createArticle);
router.patch('/:artcleId', updateArticle);
router.delete('/:artcleId', deleteArticle);

module.exports = router;