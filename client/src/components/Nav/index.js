import React, { useState } from 'react';
// import Auth from "../../utils/auth";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__menu">
        <Link to="/">Home</Link>
        <div
          className="navbar__dropdown"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <div className="navbar_menu">
          </div>
          <button className="navbar__dropdown-button">Rent</button>
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
                    <Link to="/hartford-county">Litchfield County</Link>
                  </li>
                  <li>
                    <Link to="/hartford-county">Middlesex County</Link>
                  </li>
                  <li>
                    <Link to="/hartford-county">New Haven County</Link>
                  </li>
                  <li>
                    <Link to="/hartford-county">New London County</Link>
                  </li>
                  <li>
                    <Link to="/hartford-county">Tolland County</Link>
                  </li>
                  <li>
                    <Link to="/hartford-county">Windham County</Link>
                  </li>
                </ul>
              </div>
              <div className="navbar__dropdown-column">
                <h4>Your Nest</h4>
                <ul>
                  <li>
                    <Link to="/favorites">Favorites</Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="navbar-name">
        <Link to="/">CTNESTQUEST</Link>
      </div>
      <div className="navbar-actions">
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;