const { AuthenticationError } = require('apollo-server-express');
const { User, Property, Favorites } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('properties');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('properties');
    },
    properties: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Property.find(params);
    },
    property: async (parent, { propertyId }) => {
      return Property.findOne({ _id: propertyId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('properties');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
  // Mutation
  Mutation: {
    addUser: async (parent, { firstName, lastName, username, email, password }) => {
      const user = await User.create({ firstName, lastName, username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError('No user found with this Username');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addproperty: async(parent, { propertyType,listingAgent,county, address, zipCode, price, bedroomCount, bathroomCount, petsAllowed, sqFootage, depositFee }, context) => {
        if (context.user) {
            const property  = await Property.create({
                propertyType,listingAgent,county, address, zipCode, price, bedroomCount, bathroomCount, petsAllowed, sqFootage, depositFee ,
            });
      
            await User.findOneAndUpdate(
              { _id: context.user._id },
              { $addToSet: { properties: property._id } }
            );
      
            return property;
          }
          throw new AuthenticationError('You need to be logged in!');
      
      },
    addReview: async (parent, { propertyId, reviewText }, context) => {
      if (context.user) {
        return Property.findOneAndUpdate(
          { _id: propertyId },
          {
            $addToSet: {
              reviews: { reviewText, reviewAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    
  },
};
module.exports = resolvers;