const express = require('express');
const router = express.Router();

const upload = require('../middlewares/upload');

const {
    getAllArticles,
    getArticle,
    updateArticle,
    deleteArticle,
    createArticle
} = require('../controllers/articles');

router.get('/', getAllArticles);
router.get('/:artcleId', getArticle);
router.post('/', upload.single('image') ,createArticle);
router.patch('/:artcleId', updateArticle);
router.delete('/:artcleId', deleteArticle);

module.exports = router;