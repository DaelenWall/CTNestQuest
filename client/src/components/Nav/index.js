import React, { useState } from 'react';
import Auth from "../../utils/auth";
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFeather } from '@fortawesome/free-solid-svg-icons';

library.add(faFeather);

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleFavorites = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const isLoggedIn = Auth.loggedIn();

  const handleLogout = () => {
    Auth.logout();
  };

  return (
    <nav className="navbar">
      <div className="navbar__menu">
        <div className="navbar__home-button">
        <Link to="/">HOME</Link>
        </div>
        <div
          className="navbar__dropdown"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <div className="navbar_menu"></div>
          <button className="navbar__dropdown-button">RENT</button>
          {isDropdownOpen && (
            <div className="navbar__dropdown-content">
              <div className="navbar__dropdown-column">
                <h4>CT Rentals</h4>
                <ul>
                  <li>
                    <Link to="/houses-for-rent">Houses for Rent</Link>
                  </li>
                  <li>
                    <Link to="/apartments-for-rent">Apartments for Rent</Link>
                  </li>
                </ul>
              </div>
              <div className="navbar__dropdown-column">
                <h4>Rentals by County</h4>
                <ul>
                  <li>
                    <Link to="/fairfield-county">Fairfield County</Link>
                  </li>
                  <li>
                    <Link to="/hartford-county">Hartford County</Link>
                  </li>
                  <li>
                    <Link to="/litchfield-county">Litchfield County</Link>
                  </li>
                  <li>
                    <Link to="/middlesex-county">Middlesex County</Link>
                  </li>
                  <li>
                    <Link to="/new-haven-county">New Haven County</Link>
                  </li>
                  <li>
                    <Link to="/new-london-county">New London County</Link>
                  </li>
                  <li>
                    <Link to="/tolland-county">Tolland County</Link>
                  </li>
                  <li>
                    <Link to="/windham-county">Windham County</Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="navbar-name">
        <Link to="/">
          <span className="first-letter">C</span>
          <span className="second-letter">T</span>NESTQUEST 
          <FontAwesomeIcon icon={faFeather} size="1x" />
          </Link> 
      </div>
      <div className="navbar-actions">
        {isLoggedIn && (
          <div
            className="navbar__dropdown"
            onMouseEnter={toggleFavorites}
            onMouseLeave={toggleFavorites}
          >
            <button className="navbar__dropdown-button">PROFILE</button>
            {isProfileOpen && (
              <div className="navbar__dropdown-content2">
                <h5>My Nest</h5>
                <ul>
                  <li>
                    <Link to="/favorite">Favorites</Link>
                  </li>
                </ul>
                <h5>Rental Management</h5>
                <ul>
                  <li>
                    <Link to="/add-property">List a Property</Link>
                  </li>
                  <li>
                    <Link to="/my-listings">My Listings</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
        <div className="navbar__logout-button">
        {isLoggedIn ? (
          <Link to="/" onClick={handleLogout}>LOGOUT</Link>
        ) : (
          <>
          <div className="navbar__login-button">
            <Link to="/login">LOGIN</Link>
            </div>
            <div className="navbar__signup-button">
            <Link to="/signup">SIGN UP</Link>
            </div>
          </>
        )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;