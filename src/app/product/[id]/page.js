import Image from "next/image";
// import { useState } from "react";
import ProductExample from "./components/ProductExamples";
import Accordion from "./components/Accordion";

const Singleview = async ({params}) => {
    const id = (await params).id;
    let response = await fetch(`https://dummyjson.com/products/${id}`)
    let product = await response.json();
    return <section>
         <div className="grid grid-cols-3 grid-rows-4 gap-4">
            <Image className="col-span-3 row-span-3 flex items-center justify-center" src={product.thumbnail} width={250} height={250} alt={product.title}/>
            
            {product.images.map((image) => {
                return (
                    <Image  src={image} width={250} height={250}/>
                )
            }
            )}
        </div>
        <div>
            <div className="text-3xl font-semibold flex items-center gap-2 lg:gap-6">
                {product.brand} <span className="text-xl font-medium">{product.price}</span> <br/> 
            </div>
            <div className="text-2xl font-medium">
                {product.title} <br/> 
            </div>
            <div className="text-lg font-light">
                {product.category} <br/> <br/>
            </div>
            <div className="text-normal font-medium">
                {product.description}
            </div>
        </div>
        <Accordion/>
    </section>
}
 
export default Singleview;