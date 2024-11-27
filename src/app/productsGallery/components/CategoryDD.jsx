import { useState, useEffect } from "react";

const Dropdown = ({ products, setFilteredData }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchCategories = async () => {
      const categoryResponse = await fetch(
        "https://dummyjson.com/products/categories"
      );
      const categoryData = await categoryResponse.json();

      setCategories(["All", ...categoryData]);
    };

    fetchCategories();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    if (category === "All") {
      setFilteredData(products);
    } else {
      const filteredProducts = products.filter(
        (product) => product.category === category
      );
      setFilteredData(filteredProducts);
    }
  };

  return (
    <div className="mb-4">
      <label
        htmlFor="category"
        className="block mb-2 text-sm font-medium text-saddle900 rounded-xl"
      >
        Filter by Category:
      </label>
      <select
        id="category"
        value={selectedCategory}
        onChange={(e) => handleCategoryChange(e.target.value)}
        className="block w-fit px-3 py-2 bg-saddle100 rounded-md shadow-sm"
      >
        {categories.map((category) => (
          <option
            key={category === "All" ? category : category.slug}
            value={category === "All" ? category : category.slug}
          >
            {category === "All" ? category : category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
