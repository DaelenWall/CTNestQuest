import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_SINGLE_PROPERTY } from "../../utils/queries";

const Property = () => {
  const { propertyId } = useParams();

  const { loading, data } = useQuery(GET_SINGLE_PROPERTY, {
    variables: { 
        _id: propertyId },
});

  if (!data) {
    return <p>No available data to show.</p>;
  }

  const property = data?.property;
 console.log(data)

  
  return (
      <div className="single_property-container">
      <img src={`/images/${property.image}`} alt={property.address} />
      <div key={property.id} className="single_property-info-container">
        <h3>Price: ${property.propertyId.price}/mo</h3>
        <p>Bedrooms: {property.bedroomCount}</p>
        <p>Bathrooms: {property.bathroomCount}</p>
        <p>Address: {property.address}</p>
        <div className="single_property-sub-info-container">
          <p>Listing Agent: {property.listingAgent}</p>
          <div className="single_property-add-info-containter">
            <p>Square Footage: {property.sqFootage}</p>
            <p>Pets Allowed: {property.petsAllowed}</p>
            <p>Deposit and Fees: {property.depositFee}</p>
          </div>
        </div>
      </div>
      <button className="favorite_button">Add to my Favorites</button>
    </div>
  );
};

export default Property;
