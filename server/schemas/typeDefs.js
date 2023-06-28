const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User { 
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    username: String!
    password: String!
    property: [Property]
}

type Property { 
    _id: ID
    propertyType: String!
    listingAgent: String!
    county: String!
    address: String!
    zipCode: Int!
    price: Int!
    bedroomCount: Int!
    bathroomCount: Int!
    petsAllowed: Boolean!
    sqFootage: Int!
    depositFee: Int!
    reviews: [Review]!
}

type Review {
  _id: ID
  commentText: String
  commentAuthor: String
  createdAt: String
}

type Auth {
    token: ID
    user: User
  }

type Query {
  properties: [Property]
}
type Mutation {
    login(username: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!, email: String!, username: String!, password: String!): Auth
    addProperty( propertyType: String!, listingAgent: String!, county: String!, address: String!, zipCode: Int!, price: Int!, bedroomCount: Int!, bathroomCount: Int!, petsAllowed: Boolean!, sqFootage: Int!, depositFee: Int!): Property
    addReview(propertyId: ID!, commentText: String!): Property
}
`;

module.exports = typeDefs;
