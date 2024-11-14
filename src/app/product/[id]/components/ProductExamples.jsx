
import Image from "next/image";
import {useState} from React; 
import React from "react";
const ProductExample = () => {
    return (
        <li onClick={() => setActiveImage (src)} className="cursor-pointer">
            <Image src={}
        </li>
      );
}
 
export default ProductExample;