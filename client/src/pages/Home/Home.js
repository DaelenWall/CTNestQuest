import React, { useState } from "react";

//import get properties 
import { useQuery } from '@apollo/client';
import { GET_PROPERTIES } from '../../utils/queries';

//import navigate 
import { useNavigate } from "react-router-dom";


const Home = () => {

  const navigate = useNavigate();

  const [searchState, setSearchState] = useState({ county: 'Hartford' });

  const { loading, data } = useQuery(GET_PROPERTIES);

  const handleSearchSubmit = async (event) => {
    event.preventDefault();

    // filter on properties by county entered in searchbar 
    const criteriaFilter = await data?.properties.filter(
      (property) => property.county.toLowerCase() === searchState.county.toLowerCase()
    );

    navigate("/search-results", {
      state: {
        criteriaFilter,
        },
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSearchState({
      ...searchState,
      [name]: value,
    });
  };

  return (
    <div className="home">
      <div className="hero-image">
      </div>
      <form className="search-container" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          className="search-bar"
          placeholder="Enter a CT City or Zip Code"
          name="county"
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Home;