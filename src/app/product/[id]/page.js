import Image from "next/image";
import Accordion from "./components/Accordion";
import ImageGallery from "./components/ImageGallery";


const Singleview = async ({ params }) => {
  const id = (await params).id;
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();

  return (
    <section className="flex flex-col gap-8 py-6 md:grid md:grid-cols-2 md:gap-12 bg-saddle50 bg-opacity-20">
        <div className="md:order-1 w-full"></div>
      <ImageGallery
        images={product.images}
        thumbnail={product.thumbnail}
        title={product.title}
      />
      <div className="flex-1 md:grid-col">
        <div className="text-3xl font-semibold flex items-center gap-2 lg:gap-6">
          {product.brand}{" "}
          <span className="text-xl font-medium">{product.price}</span>
        </div>
        <div className="text-2xl font-medium">{product.title}</div>
        <div className="text-lg font-light">{product.category}</div>
        <div className="text-normal font-medium py-6">{product.description}</div>
        <button className="bg-green text-saddle50 py-2 px-6 rounded-lg text-lg hover:bg-saddle900">Add To Cart</button>
        <Accordion productId={id}/>
      </div>
    </section>
  );
};

export default Singleview;
