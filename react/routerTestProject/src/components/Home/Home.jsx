import React from "react";

const Home = () => {
  const products = [
    {
      id: 1,
      name: "Noise Cancelling Headphones",
      price: "$299",
      category: "Audio",
    },
    { id: 2, name: "OLED Smart Watch", price: "$149", category: "Wearables" },
    {
      id: 3,
      name: "Mechanical Keyboard",
      price: "$89",
      category: "Accessories",
    },
    { id: 4, name: "4K Action Camera", price: "$349", category: "Cameras" },
  ];

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-800 py-20 px-6 text-center text-white">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            The Future of Tech is Here.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover premium gadgets designed to elevate your lifestyle. Limited
            time deals on all 2026 models.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
            Shop New Arrivals
          </button>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
            >
              {/* Image Container */}
              <div className="h-48 bg-gray-200 flex items-center justify-center shrink-0">
                <span className="text-gray-400 italic">Image Placeholder</span>
              </div>

              {/* Content Container - Added flex-grow and flex-col */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Upper part of content */}
                <div className="flex-grow">
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mt-1">
                    {product.name}
                  </h3>
                </div>

                {/* Footer part - This will now always stay at the bottom */}
                <div className="flex justify-between items-center mt-6">
                  <span className="text-xl font-bold text-slate-900">
                    {product.price}
                  </span>
                  <button className="bg-slate-900 text-white px-4 py-2 rounded-md text-sm hover:bg-slate-700 transition shrink-0">
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
