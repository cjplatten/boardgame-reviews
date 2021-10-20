import { useState, useEffect } from "react";
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
      <label for="categories">
        <h3>Categories</h3>
      </label>
      <select
        name="cars"
        id="categories"
        className="categories-dropdown"
      >
        <option className="category">All Reviews</option>
        {categories.map((category) => {
          return (
            <option className="category" tag={Link} to={`/categories/${category.slug}`}>
              {category.slug.replace(/-/g, " ")}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CategoriesDropdown;
