const { AuthenticationError } = require('apollo-server-express');
const { User, Property, Favorite } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('property');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('property');
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
        const user = await User.findOne({ _id: context.user._id }).populate("favorites");
        return user;
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
    addProperty: async (parent, { propertyType, landlord, county, address, zipCode, price, images, bedroomCount, bathroomCount, petsAllowed, sqFootage, depositFee }, context) => {
      if (context.user) {
        const property = await Property.create({
          propertyType, landlord, county, address, zipCode, price, images, bedroomCount, bathroomCount, petsAllowed, sqFootage, depositFee,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { properties: property._id } }
        );

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { listings: property._id } }
        );

        return property;
      }
      throw new AuthenticationError('You need to be logged in!');

    },

    addFavorite: async (parent, { propertyId }, context) => {
      if (context.user) {

        const property = await Property.findOne({ _id: propertyId});

        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { favorites: property._id } }
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

    removeProperty: async (parent, { propertyId }, context) => {
      if (context.user) {
        const property = await Property.findOne({ _id: propertyId });

        if (!property) {
          throw new Error('Property not found');
        }

        if (property.landlord.toString() !== context.user._id) {
          throw new AuthenticationError('You are not authorized to remove this property');
        }

        await property.remove();

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { properties: property._id } }
        );

        return property;
      }

      throw new AuthenticationError('You need to be logged in!');

    },

  },
};
module.exports = resolvers;