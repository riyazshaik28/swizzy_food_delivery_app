
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/about";
import Body from "./components/Body";
import Cart from "./components/cart";
import ContactUs from "./components/contactus";
import Error from "./components/error";
import Head from "./components/Head";
//import Mart from "./components/Mart";

import RestaurantMenu from "./components/RestaurantMenu";

/*LAZY LOADING FOR OPTIMAZING THE APP
-code splitting
-chunking
-dynamic bundling
-ondemand bundling
-lazy loading
*/
const Mart= lazy(()=>  import("./components/Mart"));

//<im src="https://media.giphy.com/media/1XnToWGb5tj8Y/giphy.gif"/>






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
        path:"/mart",
        element:<Suspense fallback={<im src="https://media.giphy.com/media/1XnToWGb5tj8Y/giphy.gif"/>} ><Mart /> </Suspense>
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
