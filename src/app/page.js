import Image from "next/image";
import heroImage from '../assets/images/rewu_index.jpg';
import mockupImage from '../assets/images/mockup.jpg';

export default function Home() {
  return (
    <section>
    <div className="relative w-full h-screen">
      <Image src={heroImage} alt="Image with different products" width={1440} height={697}  layout="intrinsic" objectFit="cover"  />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-black">
        <h1 className="text 6xl md:text-6xl font-bold text-center mb-4 hidden md:block">REWU</h1>
        <button className="bg-green text-saddle50 py-2 px-6 rounded-lg text-lg hover:bg-saddle100 hidden md:block">Products</button>
      </div>
    </div>
    {/* <div className="bg-saddle50 flex flex-col items-center py-12">
      <h3 className="text-saddle900">Check out our bestsellers</h3>
      <Image src={mockupImage} alt="Image with make-up product, nail polish, perfume and chili" width={200} height={200} objectFit="contain"/>

    </div> */}
    
  </section>
  );
}
