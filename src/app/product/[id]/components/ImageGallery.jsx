"use client";
import { useState } from "react";
import Image from "next/image";

const ImageGallery = ({ images, thumbnail, title }) => {
  const [mainImage, setMainImage] = useState(thumbnail);

  return (
    <div className="grid grid-cols-3 grid-rows-4 gap-4">
      {/* Main Image */}
      <Image
        className="col-span-3 row-span-3 flex items-center justify-center"
        src={mainImage}
        width={250}
        height={250}
        alt={title}
      />

      {/* Thumbnails */}
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          width={100}
          height={100}
          alt={`${title} thumbnail ${index + 1}`}
          className="cursor-pointer"
          onClick={() => setMainImage(image)} // Set clicked thumbnail as main image
        />
      ))}
    </div>
  );
};

export default ImageGallery;
