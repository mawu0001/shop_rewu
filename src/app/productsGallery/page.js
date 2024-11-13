// page.js
"use client";
import Link from "next/link";
import Image from "next/image";
import Cart from "./components/Cart";
import { useState, useEffect } from "react";

export default function Products() {
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      let response = await fetch("https://dummyjson.com/products");
      let products = await response.json();
      setData(products.products);
    };

    fetchProducts();
  }, []);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        // If product exists, increment the count
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        // If product does not exist, add it with count 1
        return [...prevItems, { ...product, count: 1 }];
      }
    });
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    setCartItems(
      (prevItems) =>
        prevItems
          .map((item) =>
            item.id === productId ? { ...item, count: item.count - 1 } : item
          )
          .filter((item) => item.count > 0) // Remove items with count 0
    );
  };

  return (
    <div className="grid grid-cols-[1fr_1fr_1fr] relative ">
      {data.map((product) => (
        <article key={product.id}>
          <div className="p-3 rounded-lg">
            <Link href={`/product/${product.id}`} className="grid grid-rows-4">
              <Image
                className="row-start-1 row-span-2"
                src={product.thumbnail}
                width={250}
                height={250}
                alt={product.title}
              />
              <p className="uppercase font-semibold text-xs row-start-3">
                {product.brand}
              </p>
              <div className="grid grid-cols-2 text-xs place-content-evenly row-start-4">
                <p>{product.title}</p>
                <p className="text-end">${product.price}</p>
              </div>
            </Link>
            <button
              onClick={() => addToCart(product)}
              className="bg-green text-saddle50 rounded-3xl px-3 py-1 row-start-5"
            >
              <span>Add to Cart</span>
            </button>
          </div>
        </article>
      ))}
      {/* Pass cartItems and removeFromCart function as props to Cart */}
      <Cart
        items={cartItems}
        removeFromCart={removeFromCart}
        className="grid-cols-4 row-span-6"
      />
    </div>
  );
}
