import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      favorites {
        _id
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