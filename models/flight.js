const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
        default: ['n/a']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: ['DEN']
    },
    flightNo: {
        type: Number,
        default: ['n/a']
    },
    departs: {
        type: Date,
        default: function () {
            return new Date().getFullYear();
        },

    },
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);