import React from "react";

const Shop = () => {
  const categories = ["All", "Laptops", "Smartphones", "Audio", "Gaming"];

  return (
    <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row gap-8">
      {/* Sidebar Filters */}
      <aside className="w-full md:w-64 shrink-0">
        <h3 className="text-xl font-bold mb-6">Filters</h3>
        <div className="mb-8">
          <h4 className="font-semibold mb-3 text-gray-700">Category</h4>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600"
                />
                <label className="text-gray-600 hover:text-blue-600 cursor-pointer">
                  {cat}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-gray-700">Price Range</h4>
          <input
            type="range"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>$0</span>
            <span>$5000</span>
          </div>
        </div>
      </aside>

      {/* Product List Section */}
      <section className="flex-grow">
        <div className="flex justify-between items-center mb-8">
          <p className="text-gray-600">Showing 1–12 of 48 results</p>
          <select className="bg-white border border-gray-300 rounded-md px-3 py-1 text-sm focus:ring-blue-500 outline-none">
            <option>Default Sorting</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        {/* Reuse the Grid Logic from Home here */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Map your products here */}
          <div className="h-64 bg-gray-100 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
            <span className="text-gray-400">Product Item</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
