import React from "react";
import ReactDOM from "react-dom/client";

console.log("hello");

const heading = React.createElement("h1",{},"Hello React parcel");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);


