import Link from "next/link";

const Header = () => {
  return (
    <header className="p-5 bg-saddle900 dark:bg-saddle50 text-saddle50 dark:text-saddle900 text-transform: uppercase ">
      <nav className="flex place-content-between">
        <div className="w-8 h-5 cursor-pointer block">
          <div className="w-full h-0.5 bg-saddle50 mb-1.5 transition duration-200 ease-linear"></div>
          <div className="w-full h-0.5 bg-saddle50 mb-1.5 transition duration-200 ease-linear"></div>
          <div className="w-full h-0.5 bg-saddle50 mb-1.5 transition duration-200 ease-linear"></div>
        </div>
        <ul className="hidden">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/productsGallery">
            <li>Products</li>
          </Link>
        </ul>
        <p className="font-semibold">rewu</p>
      </nav>
    </header>
  );
};

export default Header;
