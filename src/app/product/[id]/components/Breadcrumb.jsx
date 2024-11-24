import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

const Breadcrumb = () => {
    return (
        <nav aria-label="breadcrumbs">
            <ul className="list-none pt-8 md:pt-4">
                <li className="underline inline">
                    <Link href="/productsGallery" className="flex items-center space-x-1 underline">
                    <IoIosArrowBack className="text-sm"/>
                    <span>Products</span>
                   </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Breadcrumb;
