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
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === productId ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    );
  };

  return (
    <div className="grid grid-cols-7 relative my-8 gap-4">
      <div className="grid grid-cols-3 col-span-7 md:col-span-5 gap-4 place-content-center">
        {data.map((product) => (
          <article key={product.id}>
            <div className="p-3 rounded-lg bg-saddle100 text-xs sm:text-sm md:text-base l:text-l flex flex-col place-items-center min-h-80 sm:min-h-96">
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
              <button
                onClick={() => addToCart(product)}
                className="hover:bg-green border hover:text-saddle50 text-saddle900  py-2 px-4 rounded-3xl"
              >
                <span>Add to Cart</span>
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Cart component will appear in the 4th column for larger screens */}
      <div className="col-start-6 col-span-2">
        <Cart items={cartItems} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
}
