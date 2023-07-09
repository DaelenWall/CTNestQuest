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
    favorites: [Property]
}

type Property { 
    _id: ID
    propertyType: String!
    landlord: String!
    county: String!
    address: String!
    zipCode: Int!
    image: String
    price: Int!
    bedroomCount: Int!
    bathroomCount: Int!
    petsAllowed: String!
    sqFootage: Int!
    depositFee: Int!
    reviews: [Review]
}

type Favorite { 
  favoriteDate: String
  property: [Property]
}

type Review {
  _id: ID
  reviewText: String
  reviewAuthor: String
  createdAt: String
}

type Auth {
    token: ID
    user: User
  }


  type Query {
    users: [User]
    user(username: String!): User
    properties(username: String): [Property]
    property(propertyId: ID!): Property
    me: User
  }

type Mutation {
    login(username: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!, email: String!, username: String!, password: String!): Auth
    addProperty( propertyType: String!, landlord: String!, county: String!, address: String!, zipCode: Int!, price: Int!, image: String, bedroomCount: Int!, bathroomCount: Int!, petsAllowed: String!, sqFootage: Int!, depositFee: Int!): Property
    addFavorite(propertyId: ID!): Property
    addReview(propertyId: ID!, reviewText: String!): Property
    removeProperty(propertyId: ID!): Property

}
`;

module.exports = typeDefs;





