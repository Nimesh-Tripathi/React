import React from "react";
import ReactDOM from "react-dom/client";
import { useEffect, useState } from "react";
import Header from "./Component/Header";
import Body from "./Component/Body";
import Footer from "./Component/Footer";


const AppLayout = () => {
    return (
        <div className="App">
            <Header></Header>
            <Body></Body>
            <Footer></Footer>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout></AppLayout>)