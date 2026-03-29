import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import Shop from "./components/Shop/Shop.jsx";
import Categories from "./components/Categories/Categories.jsx";
import Support from "./components/Support/Support.jsx";
import User from "./components/User/User.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="categories" element={<Categories />} />
      <Route path="support" element={<Support />} />
      <Route path="user/:userId" element={<User />} />
    </Route>,
  ),
);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "shop",
//         element: <Shop />,
//       },
//       {
//         path: "categories",
//         element: <Categories />,
//       },
//       {
//         path: "support",
//         element: <Support />,
//       },
//     ],
//   },
// ]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
