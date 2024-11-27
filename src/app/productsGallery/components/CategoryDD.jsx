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
        {categories.map((category) => {
          // If category is a string (e.g., "All")
          if (typeof category === "string") {
            return (
              <option key={category} value={category}>
                {category}
              </option>
            );
          }

          // If category is an object (e.g., { slug: "beauty", name: "Beauty" })
          return (
            <option key={category.slug} value={category.slug}>
              {category.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DropDrown;
