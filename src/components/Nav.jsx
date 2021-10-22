import { useContext } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { getCategories } from "../utils/api";
import CategoriesDropdown from "./CategoriesDropdown";
import LogOut from "./LogOut";

const Nav = () => {
  const { userLogin } = useContext(UserContext);

  return (
    
    <ul className="Nav">
      <li id="nav-dropdown">
        <CategoriesDropdown />
      </li>
      {userLogin.loggedIn ? <li id="nav-user">Hi {userLogin.user}!
      <LogOut /> </li> 
      : <li>
        <Link id="nav-user-login" to='/login'>Log in</Link>
      </li>}
    </ul>
  );
};

export default Nav;
