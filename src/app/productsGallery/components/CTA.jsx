const CTA = ({ content, addToCart, product }) => {
  return (
    <button
      className="hover:bg-green border hover:text-saddle50 text-saddle900  py-2 px-4 rounded-3xl"
      onClick={() => addToCart(product)}
    >
      <span>{content}</span>
    </button>
  );
};

export default CTA;
