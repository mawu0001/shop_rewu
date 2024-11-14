"use client"; 

import { useState, useEffect } from "react";
import Item from "./Item";

const Accordion = () => {
    const [isOpen, setIsOpen] = useState(0);
    const [aboutData, setAboutData] = usestate ([]);

    useEffect (() => {
        const fetchAboutData = async () => {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();

            const filterdata = data.about.map((item) => ({
                id: item.id, 
                weight: item.weight, 
                height: item.dimensions.height, 
                depth: item.dimensions.depth,
                tags: item.tags,
            }))

            setAboutData();
        };
        fetchAboutData();
    },[]);
    
    return (
        <section className="w-full max-w-2xl mx-auto  px-4 md:px-6 py-24 rounded-lg bg-saddle50">
            <h1 className="text-saddle900 text-xl pb-4">About</h1>
                {aboutData.map((item) => (
                    <Item
                        key={item.id}
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        // sender item={item.id} som prop til Item komponentet
                        item={item.id}

                        weight={item.weight}
                        height={item.height}
                        depth={item.depth}
                        tags={item.tags}
                    />
                ))}
        </section>
      );
};
 
export default Accordion;
















