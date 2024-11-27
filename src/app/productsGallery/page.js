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

  useEffect(() => {
    const fetchProducts = async () => {
      // Fetch products
      let response = await fetch("https://dummyjson.com/products");
      let products = await response.json();
      setData(products.products);
      setFilteredData(products.products);
    };

    fetchProducts();
  }, []);

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
        <CategoryDropdown products={data} setFilteredData={setFilteredData} />

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
