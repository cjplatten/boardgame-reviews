import { useEffect, useState } from "react";
import { getCategories } from "../utils/api";
import CategoriesDropdown from "./CategoriesDropdown";

const Nav = () => {
  

//   console.log(categories);

  return (
    <div className="Nav">
      <CategoriesDropdown />
    </div>
  );
};

export default Nav;
