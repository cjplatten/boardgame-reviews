import { useEffect, useState } from "react";
import { getCategories } from "../utils/api";

const Nav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
    });
  }, []);

  console.log(categories);

  return (
    <div className="Nav">
      <label for="categories">
        <h3>Categories</h3>
      </label>
      <select name="cars" id="categories" className='categories-dropdown'>
          <option className="category">All Reviews</option>
        {categories.map((category) => {
          return <option className="category">{category.slug.replace(/-/g,' ')}</option>;
        })}
      </select>
    </div>
  );
};

export default Nav;
