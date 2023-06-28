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
    county: String!
    address: String!
    zipCode: Int!
    price: Int!
    bedroomCount: Int!
    bathroomCount: Int!
    petsAllowed: Boolean!
    sqFootage: Int!
    depositFee: Int!
    listingAgent: String!
    reviews: [Review]!
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
    addReview(propertyId: ID!, reviewText: String!) :Property
    addProperty( propertyType: String!, county: String!, address: String!, zipCode: Int!, price: Int!, bedroomCount: Int!, bathroomCount: Int!, petsAllowed: Boolean!, sqFootage: Int!, depositFee: Int!): Property
}
`;

module.exports = typeDefs;
