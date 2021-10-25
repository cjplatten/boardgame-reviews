import { useState, useEffect } from "react";
import { Dropdown, DropdownButton, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getCategories } from "../utils/api";

const CategoriesDropdown = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
    });
  }, []);

  return (
    <>
      <NavDropdown
        id="basic-nav-dropdown"
        title="Categories"
        // variant="success"
        // className="categories-dropdown"
      >
        <NavDropdown.Item href="/categories/all" key="all-reviews">All Reviews</NavDropdown.Item>

        {categories.map((category) => {
          return (
            <NavDropdown.Item href={`/categories/${category.slug}`} key={`/categories/${category.slug}`}>
              {category.slug.replace(/-/g, " ")}
            </NavDropdown.Item>
          );
        })}
      </NavDropdown>
    </>
  );
};

export default CategoriesDropdown;
