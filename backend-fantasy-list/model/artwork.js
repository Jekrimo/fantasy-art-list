const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Artwork = new Schema({
  name: {
    type: String
  },
  price: {
    type: String
  },
  description: {
    type: String
  }
}, {
  collection: 'arts'
})

module.exports = mongoose.model('Artwork', Artwork)
