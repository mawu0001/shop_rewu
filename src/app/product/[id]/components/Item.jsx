import { IoCloseOutline } from "react-icons/io5";
import { IoRemove } from "react-icons/io5";

const Item = ({ isOpen, setIsOpen, item, weight, height, depth, tags}) => {
    return ( 
        <div className="py-4 px-12 border rounded-xl">
            <header>
                <button onClick={() => {
                    isOpen === item ? setIsOpen(0) : setIsOpen(item);
                }}
                className="flex items-center justify-between w-full text-left font-semibold py-2 text-saddle900">
                    <span className="text-saddle900">Dimensions & tags</span>
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
                <section className="text-sm text-slate-600">
                    <p className="pb-3">Weight: {weight}</p>
                    <p className="pb-3">Height: {height}</p>
                    <p className="pb-3">Depth: {depth}</p>
                    <p className="pb-3">Tags: {tags.join(",")}</p>
                </section>
            )}
        </div>
     );
};
 
export default Item;