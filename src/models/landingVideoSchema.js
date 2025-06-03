const mongoose = require('mongoose');

const landingVideoSchema = new mongoose.Schema(
    {

        landingVideo: { type: Array, require: true },
    }
)
module.exports = mongoose.model('landingVideo', landingVideoSchema)