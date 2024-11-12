import Image from "next/image";
import ProductExample from "./components/ProductExamples";

const Singleview = async ({params}) => {

    const id = (await params).id;

    let response = await fetch(`https://dummyjson.com/products/${id}`)
    let product = await response.json();

    return <section>
         <div className="grid grid-cols-3 grid-rows-4 gap-4">
            <Image className="col-span-3 row-span-3 " src={product.thumbnail} width={250} height={250} alt={product.title}/>
            
            {product.images.map((image) => {
                return (

                    <Image setActiveImage={setActiveImage} src={image} width={250} height={250} />
                    // <ProductExamples key={product.id} src={product.images}/>
                )
            }
            )}
            
            
        </div>
        <div>
            {product.brand} 
            <span>{product.price}</span> <br/> 
            {product.title} <br/> 
            {product.category} <br/> <br/>
            {product.description}
        </div>
    </section>
}
 
export default Singleview;