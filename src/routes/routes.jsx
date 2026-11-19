import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import ShopPage from "../pages/ShopPage";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "shop", element: <ShopPage /> },
      { path: "cart", element: <CartPage /> },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];

export default routes;
