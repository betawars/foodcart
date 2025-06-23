import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import AboutBody from "./components/AboutBody";
import AboutBody1 from "./components/AboutBody1";
import AboutBody2 from "./components/AboutBody2";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, Suspense, useEffect, useState } from "react";
import Shimmer from "./components/shimmerUis/Shimmer";
import UserContext from "./utils/userContext";
const Grocery = lazy(() => import("./components/Grocery"));
const Contact = lazy(() => import("./components/Contact"));


const AppLayout = () => {

    const [userName, setUserName] = useState();
    const [cartItem, setCartItems] = useState();

    useEffect(() => {
        const data = {
            name: "Shashank",
            items: 15
        };
        setUserName(data.name);
        setCartItems(data.items);
    }, []);

    return (
        //overriding the default value by setting it in value
        <UserContext.Provider value={{ loggedInUser: userName, cartValue: cartItem, setUserName, setCartItems }}>
            <div className="app">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </UserContext.Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
                children: [
                    {
                        path: "/about",
                        element: <AboutBody />,
                    },
                    {
                        path: "/about/body1",
                        element: <AboutBody1 />,
                    },
                    {
                        path: "/about/body2",
                        element: <AboutBody2 />,
                    },
                ],
            },
            {
                path: "/contact",
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <Contact />
                    </Suspense>
                ),
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />,
            },
            {
                path: "/grocery",
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <Grocery />
                    </Suspense>
                ),
            },
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} fallbackElement={<About />} />);
