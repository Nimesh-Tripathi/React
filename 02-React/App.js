import React from "react";
import ReactDOM from "react-dom/client";

console.log("hello");

// React Element 
const heading = React.createElement("h1", {}, "Hello React parcel");

console.log(heading);

const jsxHeading = <h1>Hello React using jsx</h1>

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

//React component = class based component(old) , functional based component(new)

// React Functional component
const Heading = () => {
    return <h1>Hello this is functional react component</h1>
}
const Heading2 = () => {
    return <div>
        <h1>Hello this is functional react component</h1>
    </div>
}


// Nesting react component or component composition
const Para = () => <p>nesting react component</p>

const Hero = () => {
    return <div>
        <Para></Para>
        <div>Heloooooooooooooo</div>
    </div>
}


// root.render(heading);
// root.render(jsxHeading);
// root.render(<Heading></Heading>);
root.render(<Hero></Hero>)


