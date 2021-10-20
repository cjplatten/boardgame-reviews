import { useContext } from "react";
import { useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { getCategories } from "../utils/api";
import CategoriesDropdown from "./CategoriesDropdown";

const Nav = () => {
  const { userLogin } = useContext(UserContext);

  return (
    <div className="Nav">
      <CategoriesDropdown />
      <p className="nav-user">Hi {userLogin.user}!</p>
    </div>
    
  );
};

export default Nav;
