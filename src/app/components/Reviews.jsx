import { useState, useEffect } from React;

const ProductReviews = () => {

    const [reviews, setReviews] = useState([]);

    const fetchData = async () => {
      const response = await fetch(`https://dummyjson.com/products/${reviews}`);
      const data = await response.json();
      setReviews(data); 
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="bg-saddle900 p-6 rounded-md shadow-md">
            <h2 className="text-xl font-bold text-center mb-4">Product Reviews</h2>
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-1">
                    <span className="text-xl font-bold">4 out af 5!!!!!!!</span>
                    <div className="flex text-saddle900">
                        {/* {[...Array]} */}
                    </div>
                </div>
            </div>


        </div>
    )
   





}