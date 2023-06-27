const mongoose = require('mongoose');

const { Schema } = mongoose;
const User = require('./User');
const Favorite = require(`./Favorite`)

const propertySchema = new Schema({
    propertyType: {
        type: String,
        required: true,
        trim: true
    },
    county: {
        type: String, 
        required: true,
        trim: true
    },
    address: { 
        type: String,
        required: true,
        trim: true
    },
    zipCode: {
        type: Number, 
        required: true
    },
    price: { 
        type: Number,
        required: true,
        trim: true
    }, 
    bedroomCount: {
        type: Number,
        required: true,
        trim: true
    }, 
    bathroomCount: {
        type: Number,
        required: true,
        trim: true
    }, 
    petsAllowed: {
        type: Boolean,
        required: true,
    }, 
    sqFootage: {
        type: Number,
        required: true
    },
    depositFee: {
        type: Number,
        required: true
    }, 
    listingAgent: [User.schema],
    favorites: [Favorite.schema]
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
