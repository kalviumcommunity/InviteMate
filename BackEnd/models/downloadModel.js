const mongoose = require('mongoose')

const Schema = mongoose.Schema

const downloadSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    templateID: {
        type: Number,
        required: true
    },
    template: {
        type: String,
        required: true
    },

},{ timestamps: true })

module.exports = mongoose.model('download', downloadSchema)