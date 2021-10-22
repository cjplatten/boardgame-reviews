import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/" className="header-link">
        <h1>What's in a Boardgame</h1>
      </Link>
        <h5>A boardgame review site</h5>
    </div>
  );
};

export default Header;
