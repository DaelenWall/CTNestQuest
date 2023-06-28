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