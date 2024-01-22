module.exports = {
    getAllCategories: (req, res) => {
        res.status(200).json({
            message: 'Get All '
        })
    },
    createCategory: (req, res) => {
        res.status(200).json({
            message: 'Create a '
        })
    },
    updateCategory: (req, res) => {
        const artcleId = req.params.artcleId
        res.status(200).json({
            message: `Update - ${artcleId}`
        })
    },

    deleteCategory: (req, res) => {
        const artcleId = req.params.artcleId
        res.status(200).json({
            message: `Delete - ${artcleId}`
        })
    }
}