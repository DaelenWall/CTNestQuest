import React, { useState } from 'react';
import Auth from "../../utils/auth";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const isLoggedIn = Auth.loggedIn();

  const handleLogout = () => {
    Auth.logout();
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
        <Link to="/">CTNESTQUEST</Link>
      </div>
<div className="navbar-actions">
<div>
  {isLoggedIn ? (
    <>
      <Link to="/home">Your Nest</Link>
      <Link to="/favorite">Favorites</Link>
      <Link to="/" onClick={handleLogout}>Logout</Link>
    </>
  ) : (
    <Link to="/login">Login</Link>
  )}
</div>
      <div>
        {isLoggedIn ? '' : <Link to="/signup">Sign Up</Link>}
      </div>
      </div>
    </nav>
  );
};

export default Navbar;