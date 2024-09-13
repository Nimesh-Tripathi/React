
// const heading = React.createElement("h1",{id:"heading"},"Hello from React");

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);






// Nested html Element using React

const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"hello")));



root.render(parent)