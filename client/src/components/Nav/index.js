import React, { useState } from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function DropdownMenu() {
  const [selectedCounty, setSelectedCounty] = useState(null);

  const handleClick = (county) => {
    setSelectedCounty(county);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-btn">Rent</button>
      <div className="dropdown-content">
        <div className="column">
          <h3>CT Rentals</h3>
          <ul>
            <li>
              <Link to="/rent">Houses for Rent</Link>
            </li>
            <li>
              <Link to="/rent">Apartments for Rent</Link>
            </li>
          </ul>
        </div>
        <div className="column">
          <h3>Rentals by County</h3>
          <ul>
            <li>
              <button onClick={() => handleClick('Fairfield County')}>
                Fairfield County
              </button>
            </li>
            <li>
              <button onClick={() => handleClick('New Haven County')}>
                New Haven County
              </button>
            </li>
            <li>
              <button onClick={() => handleClick('Hartford County')}>
                Hartford County
              </button>
            </li>
            <li>
              <button onClick={() => handleClick('Litchfield County')}>
                Litchfield County
              </button>
            </li>
            <li>
              <button onClick={() => handleClick('Windham County')}>
                Windham County
              </button>
            </li>
            <li>
              <button onClick={() => handleClick('Middlesex County')}>
                Middlesex County
              </button>
            </li>
            <li>
              <button onClick={() => handleClick('New London County')}>
                New London County
              </button>
            </li>
            <li>
              <button onClick={() => handleClick('Tolland County')}>
                Tolland County
              </button>
            </li>
          </ul>
        </div>
        <div className="column">
          <h3>Your Nest</h3>
          <ul>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </div>
      </div>

      {selectedCounty && (
        <div>
          <h2>{selectedCounty} Rentals</h2>
        </div>
      )}
    </div>
  );
}

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/">
              Home
            </Link>
          </li>
          <li className="mx-1">
            {DropdownMenu()}
          </li>
          <li className="mx-1">
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/login">
              Home
            </Link>
          </li>
          <li className="mx-1">
            {DropdownMenu()}
          </li>
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          CTNestQuest
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
