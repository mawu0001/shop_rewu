// components/Cart.jsx
"use client";
import { RiShoppingCart2Line } from "react-icons/ri";
import { BsFullscreenExit, BsTrash3 } from "react-icons/bs";
import { useState } from "react";

const Cart = ({ items, removeFromCart }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="top-0 right-0 absolute z-20 bg-saddle900 dark:bg-saddle50 text-saddle50 dark:text-saddle900 stroke-saddle50 dark:stroke-saddle900 rounded-3xl h-fit w-fit md:sticky">
      <header
        className="flex place-content-center place-items-center place-self-center p-2"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {!isOpen && <RiShoppingCart2Line />}
      </header>

      {isOpen && (
        <div className="m-5 p-12 relative">
          <BsFullscreenExit
            className="absolute right-2 top-2"
            onClick={() => {
              setIsOpen(false);
            }}
          />
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
          <button className="bg-green py-1 px-3 rounded-3xl">
            Proceed to Checkout
          </button>
        </div>
      )}
    </section>
  );
};

export default Cart;
