const mongoose = require('mongoose');

const { Schema } = mongoose;


const propertySchema = new Schema({
    propertyType: {
        type: String,
        required: true,
        trim: true
    },
    landlord: {
        type: String,
        required: true,
        trim: true,
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
    images:[ 
    {
        imageText: {
            type: String,
            required: true,
        }
     },
    ],
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
        type: String,
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
    reviews: [
        {
            reviewText: {
                type: String,
                required: true,
                minlength: 1,
                maxlength: 280,
            },
            reviewAuthor: {
                type: String,
                required: true,
            },
            createdAt: {
                type: Date,
                default: Date.now,
                get: (timestamp) => dateFormat(timestamp),
            },
        },
    ],  
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
