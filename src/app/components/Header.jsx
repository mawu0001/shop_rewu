"use client";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuDisplayed, setIsMenuDisplayed] = useState(false);

  return (
    <header
      className={`p-5 bg-saddle900 dark:bg-saddle50 text-saddle50 dark:text-saddle900 text-transform: uppercase transition duration-200 ease-linear${
        isMenuDisplayed ? " p-0 transition duration-200 ease-linear" : ""
      }`}
    >
      <nav className="flex place-content-between relative">
        <div
          className="w-8 h-5 cursor-pointer block"
          onClick={() => setIsMenuDisplayed(!isMenuDisplayed)}
        >
          <div
            className={`w-full h-0.5 bg-saddle50 mb-1.5 transition duration-200 ease-linear ${
              isMenuDisplayed ? "rotate-45" : ""
            }`}
          ></div>
          <div
            className={`w-full h-0.5 bg-saddle50 mb-1.5 transition duration-150 ease-linear ${
              isMenuDisplayed ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`w-full h-0.5 bg-saddle50 mb-1.5 transition duration-200 ease-linear ${
              isMenuDisplayed ? "-rotate-45" : ""
            }`}
          ></div>
        </div>
        {isMenuDisplayed && (
          <ul className="flex flex-col place-content-start place-items-center absolute top-full left-0 z-10 pb-8 h-screen min-w-full bg-saddle900">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/productsGallery">
              <li>Products</li>
            </Link>
          </ul>
        )}
        <p className="font-semibold">rewu</p>
      </nav>
    </header>
  );
};

export default Header;
