import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { GET_SINGLE_PROPERTY } from "../../utils/queries";
import { Link } from 'react-router-dom';

//import use mutation and mutation
import { ADD_FAVORITE } from "../../utils/mutations";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faRulerCombined, faDog, faSackDollar, faHouse, faBed, faBath, faStar } from '@fortawesome/free-solid-svg-icons';

library.add(faUser, faRulerCombined, faDog, faSackDollar, faHouse, faBed, faBath, faStar);


const Property = () => {
  const { propertyId } = useParams();
  const [addFavorite] = useMutation(ADD_FAVORITE);

  const { loading, data } = useQuery(GET_SINGLE_PROPERTY, {
    variables: {
      propertyId: propertyId,
    },
  });
  console.log(propertyId);

  if (!data) {
    return <p>No available data to show.</p>;
  }

  const property = data?.property;
  console.log(data);

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
    <div className="single_property-container">
      <div className="single_property-inner-container">
        <img src={`/images/${property.images[0].imageText}`} alt={property.address} />
        <div key={property.id} className="single_property-info-container">
          <div className="single_property-details">
            <h3> ${property.price}/mo</h3>
            <h4>
            <FontAwesomeIcon icon={faBed} size="lg" style={{color: "#537188",}} /> {property.bedroomCount} Bedroom <FontAwesomeIcon icon={faBath} size="lg" style={{color: "#537188",}} /> {property.bathroomCount} Bath
            </h4>
            <h4>
            <FontAwesomeIcon icon={faHouse} size="lg" style={{color: "#537188",}} /> {property.address}
              </h4>
          </div>
          <div className="single_property-sub-info-container">
            <h4>
            <FontAwesomeIcon icon={faUser} size="lg" style={{color: "#537188",}} /> Listing Agent: {property.landlord}
            </h4>
            <h4>
            <FontAwesomeIcon icon={faRulerCombined} size="lg" style={{color: "#537188",}} /> Square Footage: {property.sqFootage}sqft
            </h4>
            <h4>
            <FontAwesomeIcon icon={faDog} size="lg" style={{color: "#537188",}} /> Pets Allowed: {property.petsAllowed}
              </h4>
            <h4>
            <FontAwesomeIcon icon={faSackDollar} size="lg" style={{color: "#537188",}} /> Deposit and Fees: ${property.depositFee}</h4>
            <button className="favorite_button" type="submit">
          Pay Deposit and Fees
        </button>
          </div>
        </div>
      </div>
      <div className="reviews-container">
        <h3>Reviews:</h3>
        <h4><FontAwesomeIcon icon={faStar} size="lg" style={{color: "#CBB279",}}  /><FontAwesomeIcon icon={faStar} size="lg" style={{color: "#CBB279",}} /><FontAwesomeIcon icon={faStar} size="lg" style={{color: "#CBB279",}} /><FontAwesomeIcon icon={faStar} size="lg" style={{color: "#CBB279",}} /><FontAwesomeIcon icon={faStar} size="lg" style={{color: "#CBB279",}} /></h4>
        <div className="reviews">
          {property.reviews.map((review, index) => (
            <div key={index} className="review-item">
              <h4>
                {review.reviewText} - {review.reviewAuthor}
              </h4>
            </div>
          ))}
        </div>
      </div>
      <form className="favorite-form" onSubmit={handleAddFavorite}>
        <button className="favorite_button" type="submit">
          Add to my Favorites
        </button>
      </form>
    </div>
  );
};

export default Property;
