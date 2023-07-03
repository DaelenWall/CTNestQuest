import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      email
      favorites {
        favoriteDate
        property {
          address
          bathroomCount
          bedroomCount
          county
          depositFee
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
      firstName
      lastName
      username
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
  listingAgent
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
`;

export const GET_SINGLE_PROPERTY = gql`
{
  property(propertyId: $propertyId) {
    _id
    address
    bathroomCount
    bedroomCount
    county
    depositFee
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
        listingAgent
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
    username
  }
}
`;

export const GET_SINGLE_USER = gql`
{
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
  }
}
`;