import Image from "next/image";
import Accordion from "./components/Accordion";
import ImageGallery from "./components/ImageGallery";

const Singleview = async ({ params }) => {
  const id = (await params).id;
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();

  return (
    <section>
      <ImageGallery
        images={product.images}
        thumbnail={product.thumbnail}
        title={product.title}
      />
      <div>
        <div className="text-3xl font-semibold flex items-center gap-2 lg:gap-6">
          {product.brand}{" "}
          <span className="text-xl font-medium">{product.price}</span>
        </div>
        <div className="text-2xl font-medium">{product.title}</div>
        <div className="text-lg font-light">{product.category}</div>
        <div className="text-normal font-medium">{product.description}</div>
      </div>
      <Accordion />
    </section>
  );
};

export default Singleview;
