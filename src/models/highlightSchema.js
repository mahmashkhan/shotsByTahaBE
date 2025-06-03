const mongoose = require('mongoose');

const highlightSchema = new mongoose.Schema(
    {

        highlights: { type: Array, require: true },
    }
)
module.exports = mongoose.model('highlights', highlightSchema)