import Image from "next/image";
import Accordion from "./components/Accordion";
import ImageGallery from "./components/ImageGallery";
import Breadcrumb from "./components/Breadcrumb";


const Singleview = async ({ params }) => {
  const id = (await params).id;
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();

  const breadcrumbs = [
    {label: "Home", href: "/home"}, 
    {label: "Products", href:"/products"}, 
    {label: product.title},
  ];

  return ( 
    <div className="mx-8"> 
        <Breadcrumb />
        
    <section className="flex flex-col gap-8 py-6 md:grid md:grid-cols-2 md:gap-12">
        <div className="md:order-1 w-full"></div>
      <ImageGallery
        images={product.images}
        thumbnail={product.thumbnail}
        title={product.title}
      />
      
      <div className="flex-1 md:grid-col bg-saddle100 border-x-30">
        <div className="text-3xl font-semibold flex items-center gap-2 lg:gap-6 justify-between">
          {product.brand}{" "}
          <span className="text-xl font-medium md:hidden">{product.price}</span>
        </div>
        <div className="text-2xl font-medium">{product.title}</div>
        <div className="text-lg font-light">{product.category}</div>
        <div className="text-normal font-medium py-6">{product.description}</div>
        <button className="hover:bg-green border hover:text-saddle50 text-saddle900  py-2 px-4 rounded-3xln">Add To Cart</button>
        <div className="text-xl font-medium pt-8 hidden md:block">{product.price}</div>
        <Accordion productId={id}/>
      </div>
    </section>
    </div>
  );
};

export default Singleview;
