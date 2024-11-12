import Link from "next/link";

const Header = () => {
  return (
    <nav>
      <ul>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/producstGallery">
          <li>Products</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
