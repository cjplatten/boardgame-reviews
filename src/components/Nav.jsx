import { useContext } from "react";
import { useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { getCategories } from "../utils/api";
import CategoriesDropdown from "./CategoriesDropdown";

const Nav = () => {
  const { userLogin } = useContext(UserContext);

  return (
    
    <ul className="Nav">
      <li id="nav-dropdown">
        <CategoriesDropdown />
      </li>
      <li id="nav-user">Hi {userLogin.user}!</li>
    </ul>
  );
};

export default Nav;
