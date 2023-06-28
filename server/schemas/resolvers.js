const { AuthenticationError } = require('apollo-server-express');
const { User, Property, Favorites } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {

// Mutation
Mutation: {
    addUser: async (parent, {firstName,lastName, username, email, password }) => {
      const user = await User.create({ firstName,lastName,username, email, password });
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
    }

    },
    };
    module.exports = resolvers;