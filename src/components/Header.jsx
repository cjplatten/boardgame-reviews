import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/" className="header-link">
        <h1>Boardgame Reviews</h1>
      </Link>
    </div>
  );
};

export default Header;
