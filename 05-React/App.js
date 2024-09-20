import React from "react";
import ReactDOM from "react-dom/client";
import { useEffect, useState } from "react";
import Header from "./Component/Header";
import Body from "./Component/Body";
import Footer from "./Component/Footer";
import About from "./Component/About";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import Contact from "./Component/Contact";
import NotFound from "./Component/NotFound";
import { Outlet } from "react-router-dom";
import Service from "./Component/Service";

const AppLayout = () => {
    return (
        <div className="App">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout></AppLayout>,
        children : [
            {
                path : "/",
                element : <Body></Body>
            },
            {
                path : "/about",
                element : <About></About>
            },
            {
                path : "/contact",
                element : <Contact></Contact>
            },
            {
                path : "/service",
                element : <Service></Service>
            },
            {
                path : "*",
                element : <NotFound></NotFound>
            },
        ]
    }
])



const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout></AppLayout>)
root.render(<RouterProvider router={appRouter}></RouterProvider>)