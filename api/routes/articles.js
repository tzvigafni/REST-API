const express = require('express');
const router = express.Router();

const upload = require('../middlewares/upload');
const checkAuth = require('../middlewares/checkAuth')

const {
    getAllArticles,
    getArticle,
    updateArticle,
    deleteArticle,
    createArticle
} = require('../controllers/articles');

router.get('/', getAllArticles);
router.get('/:artcleId', getArticle);

router.post('/', checkAuth ,upload.single('image') ,createArticle);
router.patch('/:artcleId', checkAuth, updateArticle);
router.delete('/:artcleId', checkAuth, deleteArticle);

module.exports = router;