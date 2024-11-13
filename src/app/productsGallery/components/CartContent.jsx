import { RiShoppingCart2Line } from "react-icons/ri";
import { BsFullscreenExit } from "react-icons/bs";

const CartContent = ({ isOpen, setIsOpen }) => {
  return (
    <section className="top-0 right-0 absolute z-20 bg-saddle900 dark:bg-saddle50 text-saddle50 dark:text-saddle900 stroke-saddle50 dark:stroke-saddle900 rounded-3xl h-fit w-fit">
      <header
        className="flex place-content-center place-items-center place-self-center p-2"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        {!isOpen && <RiShoppingCart2Line />}
      </header>

      {isOpen && (
        <div className=" m-5 p-12 relative">
          <BsFullscreenExit
            className="absolute right-2 top-2"
            onClick={() => {
              setIsOpen(false);
            }}
          />
          <p className="text-center font-semibold">Cart</p>

          <button>Proceed to Checkout</button>
        </div>
      )}
    </section>
  );
};

export default CartContent;
