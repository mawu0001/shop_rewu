import { IoCloseOutline } from "react-icons/io5";
import { IoRemove } from "react-icons/io5";

const Item = ({ isOpen, setIsOpen, item, weight, height, width, depth, tags}) => {
    return ( 
        <div className="py-4 px-12 border rounded-xl">
            <header>
                <button onClick={() => {
                    isOpen === item ? setIsOpen(0) : setIsOpen(item);
                }}
                className="flex items-center justify-between w-full text-left font-semibold py-2 text-saddle900">
                    <span className="text-saddle900">Details</span>
                    <span className="ml-8 self-start">
                        {isOpen === item ? (
                            <IoCloseOutline className="text-2xl" />
                        ) : (
                            <IoRemove className="text-2xl" />
                        )}
                    </span>
                </button>
            </header>

            {isOpen === item && (
                <section className="text-sm text-slate-600 mt-4 flex flex-row md:flex-col justify-between gap-x-12 md:gap-x-8">
                    <div className="w-full md:w-auto">
                        <p className="pb-3 font-semibold">Type:</p>
                        <p className="pb-8 font-medium">{tags.join(",")}</p>
                    </div>
                    <div className="w-full md:w-auto flex flex-col space-y-2">
                        <p className="pb-3 font-semibold">Dimensions:</p>
                        <p className="pb-3">Weight: {weight}</p>
                        <p className="pb-3">Height: {height}</p>
                        <p className="pb-3">Width: {width}</p>
                        <p className="pb-3">Depth: {depth}</p>
                    </div>
                    
                </section>
            )}
        </div>
     );
};
 
export default Item;