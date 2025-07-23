import { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";
import Body from "./components/Body";
import Cart from "./components/Cart";
import ContactUs from "./components/contactus";
import Error from "./components/error";
import Head from "./components/Head";
import Login from "./components/login";
import RestaurantMenu from "./components/RestaurantMenu";
import appStore from "./components/utils/appStore";
import { UserContext } from "./components/utils/usercontext";

// Lazy-loaded components
const Mart = lazy(() => import("./components/Mart"));
const About = lazy(() => import("./components/about"));

const App = () => {
  const [userName, setuserName] = useState();

  useEffect(() => {
    const data = {
      name: "RIYAZ", 
    };
    setuserName(data.name);
  }, []);

  return (
    // wrap whole app in reduxStore
    <Provider store={appStore}  >
    <UserContext.Provider value={{ logginuser: userName, setuserName }}>
       
      <div className="app">
      <UserContext.Provider value={{ logginuser: "H-RIYAZ" }}>
        <Head />
        </UserContext.Provider>
        <Outlet />
      </div>

    </UserContext.Provider>

</Provider>
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
        path: "/about",
        element: (
          <Suspense fallback={<h1>About page is loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/body",
        element: <Body />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/mart",
        element: (
          <Suspense
            fallback={
              <img src="https://media.giphy.com/media/1XnToWGb5tj8Y/giphy.gif" alt="Loading..." />
            }
          >
            <Mart />
          </Suspense>
        ),
      },
      {
        path: "/restmenu/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("riyaz"));
root.render(<RouterProvider router={AppRouter} />);
