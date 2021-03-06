const { Schema, model } = require('mongoose');

const opinionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = model('Opinions', opinionSchema);