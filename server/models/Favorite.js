const mongoose = require('mongoose');

const { Schema } = mongoose;

const favoriteSchema = new Schema({
  favoriteDate: {
    type: Date,
    default: Date.now
  },
  property: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Property'
    }
  ]
});

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;
