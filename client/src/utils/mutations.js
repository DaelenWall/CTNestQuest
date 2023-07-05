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

export const ADD_FAVORITE = gql`
  mutation addFavorite($property: [ID]!) {
    addFavorite(property: $propertys) {
      favoriteDate
      property {
        _id
        propertyType
        county
        address
        zipCode
        price
        bedroomCount
        bathroomCount
        petsAllowed
        sqFootage
        depositFee
        listingAgent
      }
    }
  }
`;

export const ADD_REVIEW = gql`
mutation addReview($propertyId: ID!, $reviewText: String!){
  addReview(propertyId: $propertyId, reviewText: $reviewText){
    _id: ID
    propertyType
    listingAgent 
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
