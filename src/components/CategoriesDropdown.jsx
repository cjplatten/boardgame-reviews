import { useState, useEffect } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
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
    <div>
      <DropdownButton
        id="dropdown-basic-button"
        title="Categories"
        variant="success"
        className="categories-dropdown"
      >
        <Dropdown.Item href="/categories/all" key="all-reviews">All Reviews</Dropdown.Item>

        {categories.map((category) => {
          return (
            <Dropdown.Item href={`/categories/${category.slug}`} key={`/categories/${category.slug}`}>
              {category.slug.replace(/-/g, " ")}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>
    </div>
  );
};

export default CategoriesDropdown;
