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
    zipCode: Number!
    price: Number!
    bedroomCount: Number!
    bathroomCount: Number!
    petsAllowed: Boolean!
    sqFootage: Number!
    depositFee: Number!
    listingAgent: [User]
}

type Mutation {
    login(username: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!, email: String!, username String!, password: String!): Auth
    addProperty( propertyType: String!, county: String!, address: String!, zipCode: Number!, price: Number!, bedroomCount: Number!, bathroomCount: Number!, petsAllowed: Boolean!, sqFootage: Number!, depositFee: Number!): Property
}
`;

module.exports = typeDefs;
