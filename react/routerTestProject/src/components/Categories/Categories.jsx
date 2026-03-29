import React from "react";

const Categories = () => {
  const catItems = [
    { name: "Computing", count: "120+ Items", color: "bg-blue-100" },
    { name: "Audio", count: "80+ Items", color: "bg-purple-100" },
    { name: "Smart Home", count: "45+ Items", color: "bg-green-100" },
    { name: "Photography", count: "30+ Items", color: "bg-orange-100" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
          Browse by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {catItems.map((item, index) => (
            <div
              key={index}
              className={`${item.color} group p-8 rounded-2xl cursor-pointer hover:shadow-lg transition-all duration-300 text-center`}
            >
              <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-slate-800">
                  {item.name[0]}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-1">
                {item.name}
              </h3>
              <p className="text-slate-500 text-sm font-medium">{item.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
