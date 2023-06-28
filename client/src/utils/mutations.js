import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_Favorite = gql`
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

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;
