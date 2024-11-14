"use client";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuDisplayed, setIsMenuDisplayed] = useState(false);

  return (
    <header
      className={`z-40 bg-saddle900 dark:bg-saddle50 text-saddle50 dark:text-saddle900 uppercase transition duration-200 ease-linear`}
    >
      <nav className="flex justify-between items-center relative">
        <p className="font-semibold m-4">rewu</p>

        <div
          className="w-8 h-5 cursor-pointer block md:hidden m-4"
          onClick={() => setIsMenuDisplayed(!isMenuDisplayed)}
        >
          <div
            className={`w-full h-0.5 bg-saddle50 dark:bg-saddle900 mb-1.5 transition duration-200 ease-linear ${
              isMenuDisplayed ? "rotate-45" : ""
            }`}
          ></div>
          <div
            className={`w-full h-0.5 bg-saddle50 dark:bg-saddle900 mb-1.5 transition duration-200 ease-linear ${
              isMenuDisplayed ? "-rotate-45" : ""
            }`}
          ></div>
          <div
            className={`w-full h-0.5 bg-saddle50 dark:bg-saddle900 mb-1.5 transition duration-150 ease-linear ${
              isMenuDisplayed ? "opacity-0" : "opacity-100"
            }`}
          ></div>
        </div>
        {isMenuDisplayed && (
          <ul className="flex flex-col items-center absolute top-full left-0 z-10 pb-8 h-screen w-full bg-saddle900 dark:bg-saddle50 md:hidden">
            <Link href="/">
              <li className="py-2">Home</li>
            </Link>
            <Link href="/productsGallery">
              <li className="py-2">Products</li>
            </Link>
          </ul>
        )}

        <ul className="hidden md:flex space-x-8">
          <Link href="/">
            <li className="hover:underline">Home</li>
          </Link>
          <Link href="/productsGallery">
            <li className="hover:underline">Products</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
