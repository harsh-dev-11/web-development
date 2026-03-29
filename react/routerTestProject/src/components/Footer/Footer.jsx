import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Brand Column */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">ElectroStore</h3>
          <p className="text-sm leading-relaxed">
            Supplying high-quality electronics since 2010. We pride ourselves on
            fast shipping and expert customer support.
          </p>
        </div>

        {/* Links Column */}
        <div>
          <h4 className="text-white font-semibold mb-4">Customer Service</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-blue-400">
                Track Order
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Returns & Exchanges
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Shipping Info
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
          <div className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter email"
              className="bg-slate-800 border border-slate-700 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            />
            <button className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500 font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-12 pt-6 border-t border-slate-800 text-center text-xs">
        <p>
          &copy; {new Date().getFullYear()} ElectroStore. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
