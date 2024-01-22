const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, required: true },
    desription: { type: String, required: true },
    content: { type: String, required: true }
});

module.exports = mongoose.model('Article', articleSchema);