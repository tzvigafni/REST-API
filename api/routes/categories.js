const express = require('express');
const router = express.Router();

const {
    getAllCategories,
    updateCategory,
    deleteCategory,
    createCategory
} = require('../controllers/categories');

router.get('/', getAllCategories);
router.post('/', createCategory);
router.patch('/:artcleId', updateCategory);
router.delete('/:artcleId', deleteCategory);

module.exports = router;