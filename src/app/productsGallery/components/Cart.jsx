// components/Cart.jsx
"use client";
import { RiShoppingCart2Line } from "react-icons/ri";
import { BsFullscreenExit, BsTrash3 } from "react-icons/bs";
import { useState } from "react";
import Link from "next/link";

const Cart = ({ items, removeFromCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  // Calculate the total price of items in the cart
  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.count, 0);
  };
  return (
    <section className="top-0 right-0 absolute md:relative z-20 bg-saddle900 dark:bg-saddle50 text-saddle50 dark:text-saddle900 stroke-saddle50 dark:stroke-saddle900 rounded-3xl h-fit w-full lg:w-full xl:w-full">
      {/* Cart icon toggle button (only on mobile screens) */}
      <header
        className="flex place-content-center place-items-center place-self-center p-2 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {!isOpen && <RiShoppingCart2Line />}
      </header>

      {/* Modal cart content (only visible on small screens when 'isOpen' is true) */}
      <div
        className={`absolute inset-0 bg-black bg-opacity-50 md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Cart content */}
      <div
        className={`m-5 p-12 relative md:static md:min-w-80 ${
          isOpen ? "block" : "hidden"
        } md:block`}
      >
        {/* Close button only visible on mobile screens */}
        {isOpen && (
          <BsFullscreenExit
            className="absolute right-2 top-2 text-saddle50 dark:text-saddle900"
            onClick={() => setIsOpen(false)}
          />
        )}
        <p className="text-center font-semibold">Cart</p>
        <ul>
          {items.map((item) => (
            <li
              key={item.id}
              className="my-2 grid grid-cols-4 text-xs place-items-center"
            >
              <p className="col-start-1">{item.title}</p>
              <p className="col-start-2">{item.count}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-saddle50 p-1"
                title="Remove one from cart"
              >
                <BsTrash3 />
              </button>
              <p>${item.price}</p>
            </li>
          ))}
        </ul>
        {/* Display the total price */}
        <div className="mt-4">
          <p className="text-center font-semibold">
            Total: ${calculateTotal().toFixed(2)}
          </p>
        </div>
        <Link href="/payment">
          <button className="bg-green py-1 px-3 rounded-3xl">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Cart;
