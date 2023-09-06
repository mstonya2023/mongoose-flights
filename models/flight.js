const flight = require('flight');
// optional shortcut to the mongoose.Schema class
const Schema = flight.Schema;



const flightSchema = new Schema({
  airline: { type: String, required: true },
  releaseYear: {
    type: Number,
    default: function() {
      return new Date().getFullYear();
    },
    min: 1927
  },
  mpaaRating: {
    type: String,
    enum: ['G', 'PG', 'PG-13', 'R']
  },
  cast: [String],
  nowShowing: { type: Boolean, default: true },
  reviews: [reviewSchema]
}, {
  timestamps: true
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Movie', movieSchema);