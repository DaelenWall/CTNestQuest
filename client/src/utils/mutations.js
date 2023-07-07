import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_PROPERTY = gql`
  mutation addProperty(
    $propertyType: String!
    $landlord: String!
    $county: String!
    $address: String!
    $zipCode: String!
    $price: Float!
    $bedroomCount: Int!
    $bathroomCount: Int!
    $petsAllowed: Boolean!
    $sqFootage: Int!
    $depositFee: Float!
  ) {
    addProperty(
      propertyType: $propertyType
      landlord: $landlord
      county: $county
      address: $address
      zipCode: $zipCode
      price: $price
      bedroomCount: $bedroomCount
      bathroomCount: $bathroomCount
      petsAllowed: $petsAllowed
      sqFootage: $sqFootage
      depositFee: $depositFee
    ) {
      propertyType
      landlord
      county
      address
      zipCode
      price
      bedroomCount
      bathroomCount
      petsAllowed
      sqFootage
      depositFee
    }
  }
`;







export const ADD_FAVORITE = gql`
mutation Mutation($propertyId: ID!) {
  addFavorite(propertyId: $propertyId) {
    _id
    address
    bathroomCount
    bedroomCount
    county
    depositFee
    image
    listingAgent
    petsAllowed
    price
    propertyType
    reviews {
      reviewText
      reviewAuthor
    }
    sqFootage
    zipCode
  }
}
`;

export const ADD_REVIEW = gql`
mutation addReview($propertyId: ID!, $reviewText: String!){
  addReview(propertyId: $propertyId, reviewText: $reviewText){
    _id: ID
    propertyType
    landlord 
    county 
    address
    zipCode
    price
    bedroomCount 
    bathroomCount
    petsAllowed 
    sqFootage 
    depositFee
    reviews{
      _id: ID
      reviewText
      reviewAuthor
      createdAt
    }
  }
}


`;

export const REMOVE_PROPERTY = gql`
  mutation removeProperty($propertyId: ID!) {
    removeProperty(propertyId: $propertyId) {
      _id
    }
  }
`;


export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $username: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      username: $username
    ) {
      token
      user {
        _id
      }
    }
  }
`;
