const express = require('express');
const router = express.Router();

const {
    getAllCategories,
    getCategory,
    updateCategory,
    deleteCategory,
    createCategory
} = require('../controllers/categories');

router.get('/', getAllCategories);
router.get('/:categoryId', getCategory);
router.post('/', createCategory);
router.patch('/:categoryId', updateCategory);
router.delete('/:categoryId', deleteCategory);

module.exports = router;