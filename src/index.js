
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/about";
import Body from "./components/Body";
import Cart from "./components/cart";
import ContactUs from "./components/contactus";
import Error from "./components/error";
import Head from "./components/Head";
import RestaurantMenu from "./components/RestaurantMenu";









const App = () => {
  return (
    <div className="app">
    <Head />
     <Outlet />
    </div>
  );
};


const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact", // changed to "/contact" for better readability and convention
        element: <ContactUs />,
      },
      {
        path: "/body", // "/body" is already a child path of "/"
        element: <Body />,
      },
      {
        path: "/restmenu/:resId", // It's fine to have dynamic params like this
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("riyaz"));
root.render(<RouterProvider router={AppRouter}/>);
