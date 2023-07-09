import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      email
      firstName
      lastName
      password
      username
      favorites {
        _id
        address
        bathroomCount
        bedroomCount
        county
        depositFee
        image
        landlord
        petsAllowed
        price
        propertyType
        sqFootage
        zipCode
        reviews {
          reviewText
          reviewAuthor
        }
      }
    }
  }
`;

export const GET_PROPERTIES = gql`
{
  properties {
  _id
  address
  bathroomCount
  bedroomCount
  county
  depositFee
  landlord
  petsAllowed
  price
  image
  propertyType
  sqFootage
  zipCode
  reviews {
    reviewText
    reviewAuthor
  }
}
}
`;

export const GET_SINGLE_PROPERTY = gql`
query Query($propertyId: ID!){
  property(propertyId: $propertyId) {
    _id
    address
    bathroomCount
    bedroomCount
    county
    depositFee
    landlord
    petsAllowed
    price
    image
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

export const GET_USER = gql`
{
  users {
    _id
    email
    favorites {
      property {
        address
        bathroomCount
        bedroomCount
        county
        depositFee
        landlord
        petsAllowed
        price
        propertyType
        sqFootage
        zipCode
        reviews {
          reviewText
          reviewAuthor
        }
      }
    }
    firstName
    lastName
    property {
      address
      bathroomCount
      bedroomCount
      county
      depositFee
      landlord
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
    username
  }
}
`;

export const GET_SINGLE_USER = gql`
query Query($username: String!) {
  user(username: $username) {
    _id
    email
    favorites {
      property {
        address
        bathroomCount
        bedroomCount
        county
        depositFee
        landlord
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
  }
}
`;