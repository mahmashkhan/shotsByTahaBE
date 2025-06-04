const mongoose = require('mongoose');

const landingImageSchema = new mongoose.Schema(
    {

        landingImage: { type: Array, require: true },
    }
)
module.exports = mongoose.model('landingImage', landingImageSchema)