module.exports = {
    getAllArticles: (req, res) => {
        res.status(200).json({
            message: 'Get All Articles'
        })
    },
    createArticle: (req, res) => {
        res.status(200).json({
            message: 'Create a new article'
        })
    },
    updateArticle: (req, res) => {
        const artcleId = req.params.artcleId
        res.status(200).json({
            message: `Update articles - ${artcleId}`
        })
    },

    deleteArticle: (req, res) => {
        const artcleId = req.params.artcleId
        res.status(200).json({
            message: `Delete articles - ${artcleId}`
        })
    }
}