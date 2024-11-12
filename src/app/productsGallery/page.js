import Link from "next/link";
import Image from "next/image";

export default async function Products(){
    let response = await fetch('https://dummyjson.com/products')
    let data = await response.json();

    return (
        <div className="grid grid-cols-[1fr_1fr_1fr]">
            {data.products.map((product) => {

                return (
                    <div key={product.id} className="p-3 rounded-lg">
                        <Image src={product.thumbnail} width={250} height={250} alt={product.title}/>
                        <Link href={`/detaljer/${product.id}`}>{product.title}</Link>
                    </div>
                );
            })}
        </div>
    );  
}
