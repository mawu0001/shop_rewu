'use client';
import { useState } from "react";
import Image from "next/image";

const ImageGallery = ({ images, thumbnail, title }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="grid grid-cols-3 bg-saddle100 border-xl">
     
     <div className="col-span-3 place-self-center ">
      <Image
        src={mainImage}
        width={400}
        height={250}
        alt={title}
      />
     </div>

  
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          width={100}
          height={100}
          alt={`${title} thumbnail ${index + 1}`}
          className="cursor-pointer place-self-center"
          onClick={() => setMainImage(image)} 
        />
      ))}
    </div>
  );
};

export default ImageGallery;
