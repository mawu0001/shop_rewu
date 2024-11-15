const DropDrown = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor="category"
        className="block mb-2 text-sm font-medium text-saddle900 rounded-xl"
      >
        Filter by Category:
      </label>
      <select
        id="category"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="block w-fit px-3 py-2 bg-saddle100 rounded-md shadow-sm"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDrown;
