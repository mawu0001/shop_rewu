'use client';

import { useState, useEffect } from "react";
import Item from "./Item";

const Accordion = ({ productId }) => {
  const [isOpen, setIsOpen] = useState(0);
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      const response = await fetch(`https://dummyjson.com/products/${productId}`);
      const data = await response.json();
      setAboutData(data); 
    };
    fetchAboutData();
  }, [productId]); 

  return (
    <section className="w-auto mx-auto px-4 py-24 rounded-lg bg-saddle50">
      {aboutData ? (
        <Item
          key={aboutData.id}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          item={aboutData.id}
          weight={aboutData.weight}
          height={aboutData.dimensions?.height}
          width={aboutData.dimensions?.width}
          depth={aboutData.dimensions?.depth}
          tags={aboutData.tags}
        />
      ) : (
        <p>Loading about data...</p> 
      )}
    </section>
  );
};

export default Accordion;
