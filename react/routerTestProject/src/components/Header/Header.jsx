import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-slate-900 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight">
          <Link to="/">
            <span className="text-blue-500">Electro</span>Store
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-blue-100 transition  p-1.5 rounded-md ${isActive ? "bg-blue-500" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="shop"
                className={({ isActive }) =>
                  `hover:text-blue-100 transition  p-1.5 rounded-md ${isActive ? "bg-blue-500" : ""}`
                }
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="categories"
                className={({ isActive }) =>
                  `hover:text-blue-100 transition  p-1.5 rounded-md ${isActive ? "bg-blue-500" : ""}`
                }
              >
                Categories
              </NavLink>
            </li>
            <li>
              <NavLink
                to="support"
                className={({ isActive }) =>
                  `hover:text-blue-100 transition  p-1.5 rounded-md ${isActive ? "bg-blue-500" : ""}`
                }
              >
                Support
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Icons/Cart */}
        <div className="flex items-center space-x-5">
          <button className="hover:text-blue-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <div className="relative cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="absolute -top-2 -right-2 bg-blue-600 text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
