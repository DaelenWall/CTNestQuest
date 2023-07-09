import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { GET_SINGLE_PROPERTY } from "../../utils/queries";

//import use mutation and mutation
import { ADD_FAVORITE } from '../../utils/mutations';

const Property = () => {
  const { propertyId } = useParams();
  const [addFavorite] = useMutation(ADD_FAVORITE);

  const { loading, data } = useQuery(GET_SINGLE_PROPERTY, {
    variables: { 
        propertyId: propertyId },
});
  console.log(propertyId);

  if (!data) {
    return <p>No available data to show.</p>;
  }

  const property = data?.property;
  console.log(data)

  const handleAddFavorite = async (event) => {
    event.preventDefault();

    const addtoFavorite = await addFavorite({
      variables: {
        propertyId: property._id,
      },
    });
    window.location.reload(false);
  };

  
  return (
      <form className="single_property-container" onSubmit={handleAddFavorite}>
      <img src={`/images/${property.image}`} alt={property.address} />
      <div key={property.id} className="single_property-info-container">
        <h3>Price: ${property.price}/mo</h3>
        <p>Bedrooms: {property.bedroomCount}</p>
        <p>Bathrooms: {property.bathroomCount}</p>
        <p>Address: {property.address}</p>
        <div className="single_property-sub-info-container">
          <p>Listing Agent: {property.landlord}</p>
          <div className="single_property-add-info-containter">
            <p>Square Footage: {property.sqFootage}</p>
            <p>Pets Allowed: {property.petsAllowed}</p>
            <p>Deposit and Fees: {property.depositFee}</p>
            <p>Reviews: </p>
            {property.reviews.map((review, index) => (
              <div key={index} className="review-item">
                <p>{review.reviewText} - {review.reviewAuthor}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button className="favorite_button" type="submit">Add to my Favorites</button>
    </form>
  );
};

export default Property;