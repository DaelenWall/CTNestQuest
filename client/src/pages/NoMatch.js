import React from "react";
import Jumbotron from "../components/Jumbotron";

const NoMatch = () => {
  return (
    <div>
      <Jumbotron>
        <h1>404 Page Not Found</h1>
        <h1>
        <Link to="/">← Back to Homepage</Link>
        </h1>
      </Jumbotron>
    </div>
  );
};

export default NoMatch;
