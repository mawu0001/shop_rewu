"use client";
import Link from "next/link";
import Image from "next/image";
import Cart from "./components/Cart";
import CategoryDropdown from "./components/CategoryDD";
import { useState, useEffect } from "react";
import CTA from "./components/CTA";

export default function Products() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchProductsAndCategories = async () => {
      // Fetch products
      let response = await fetch("https://dummyjson.com/products");
      let products = await response.json();
      setData(products.products);
      setFilteredData(products.products);

      // Fetch categories
      const categoryResponse = await fetch(
        "https://dummyjson.com/products/categories"
      );
      const categoryData = await categoryResponse.json();

      // Log the category data to check its structure
      console.log("Category Data:", categoryData);

      // Extract category names (or slugs) from the response
      const categoryNames = categoryData.map((category) => category.slug);

      // Set the categories, including the 'All' option
      setCategories(["All", ...categoryNames]);
    };

    fetchProductsAndCategories();
  }, []);

  // Handle category selection and filtering products
  useEffect(() => {
    console.log("Selected Category:", selectedCategory); // Log selected category
    console.log("Categories Array:", categories); // Log the available categories

    if (selectedCategory === "All") {
      setFilteredData(data); // Show all products if 'All' is selected
    } else {
      // Filter products based on the selected category
      const filtered = data.filter(
        (product) => product.category === selectedCategory
      );
      console.log("Filtered Products:", filtered); // Log the filtered products
      setFilteredData(filtered);
    }
  }, [selectedCategory, data, categories]); // Trigger this effect when category changes

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, count: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === productId ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    );
  };

  return (
    <div className="grid grid-cols-7 relative my-8 gap-4 mx-6">
      <div className="col-span-7 md:col-span-5">
        {/* Category Dropdown */}
        <CategoryDropdown
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="grid grid-cols-2 gap-4 place-content-center md:grid-cols-3">
          {filteredData.map((product) => (
            <article key={product.id}>
              <div className="p-3 rounded-lg bg-saddle100 text-xs sm:text-sm md:text-base l:text-l grid place-content-between place-items-center min-h-80 sm:min-h-96">
                <Link
                  href={`/product/${product.id}`}
                  className="grid grid-rows-3"
                >
                  <Image
                    className="row-start-1 row-span-2 place-self-center"
                    src={product.thumbnail}
                    width={250}
                    height={250}
                    alt={product.title}
                  />
                  <div>
                    <p className="uppercase font-semibold row-start-3">
                      {product.brand}
                    </p>
                    <div className="grid grid-cols-2 place-content-evenly row-start-4">
                      <p>{product.title}</p>
                      <p className="text-end">${product.price}</p>
                    </div>
                  </div>
                </Link>
                <CTA
                  content="Add to Cart"
                  addToCart={addToCart}
                  product={product}
                />
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="col-start-6 col-span-2">
        <Cart items={cartItems} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
}
