import React from "react";
import ReactDOM from "react-dom/client";
import { useEffect ,useState } from "react";




// React Element(JSX) and React component and component composition examples 
// const heading = <div>
//     <h1>HEllo</h1>
//     <p>lorem2</p>
// </div>

// const Spn = () => <div>Nimesh</div>

// const Heading2 = () => {
//     return <div>
//         {heading}
//         <Spn></Spn>
//         <h2>Heeloooooooooo</h2>
//     </div>
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Heading2></Heading2>)


// food ordering app



const Header = () => {
    return(
        <nav className="navbar">
        <div className="logo">
            <img src="https://png.pngtree.com/png-vector/20221231/ourmid/pngtree-food-delivery-logo-template-design-sign-menu-vector-png-image_43664212.jpg"></img>
        </div>
        <ul className="nav-links">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
        </ul>
    </nav>    
    )
};

// const Body = () => {
//   return (
//     <div style={{ padding: "20px" }}>
//       {/* Search Bar */}

//       <div style={{ marginBottom: "20px" }}>
//         <input
//           type="text"
//           placeholder="Search..."
//           style={{
//             padding: "10px",
//             width: "100%",
//             maxWidth: "400px",
//             border: "1px solid #ccc",
//             borderRadius: "5px",
//             fontSize: "16px",
//           }}
//         />
//       </div>

//       {/* Card Container */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(2, 1fr)",
//           gap: "20px",
//           maxWidth: "800px",
//         }}
//       >
//         <div
//           style={{
//             padding: "20px",
//             backgroundColor: "#f5f5f5",
//             borderRadius: "8px",
//             textAlign: "center",
//             boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//           }}
//         >
//           <h3>Card 1</h3>
//           <p>This is card number 1</p>
//         </div>
//         <div
//           style={{
//             padding: "20px",
//             backgroundColor: "#f5f5f5",
//             borderRadius: "8px",
//             textAlign: "center",
//             boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//           }}
//         >
//           <h3>Card 2</h3>
//           <p>This is card number 2</p>
//         </div>
//         <div
//           style={{
//             padding: "20px",
//             backgroundColor: "#f5f5f5",
//             borderRadius: "8px",
//             textAlign: "center",
//             boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//           }}
//         >
//           <h3>Card 3</h3>
//           <p>This is card number 3</p>
//         </div>
//         <div
//           style={{
//             padding: "20px",
//             backgroundColor: "#f5f5f5",
//             borderRadius: "8px",
//             textAlign: "center",
//             boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//           }}
//         >
//           <h3>Card 4</h3>
//           <p>This is card number 4</p>
//         </div>
//       </div>

//     </div>
//   );
// };

const Body = () => {

  const [List,setList] = useState([]);

 
  
  useEffect(() => {
    FetchData();
  },[])

  const FetchData = async() => {
    const data = await fetch("https://dummyjson.com/carts")

    const JSON =  await data.json();

    // console.log(JSON);

    setList(JSON.carts[0].products)
    
  }

  console.log(List);

  // List.map((card) => console.log(card.id))
  

    return (

      <div className="body-container">
      
        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
          />
        </div>
  
        {/* Card Container */}
        <div className="card-container">
          {List.map((card) => (
            <div className="card" key={card.id}>
              <h3>Card {card.title}</h3>
              <p>This is card number {card.price}</p>
            </div>
          ))}
        </div>

       </div>


    );
  };

  const Footer = () => {
    return (
      <footer
        style={{
          backgroundColor: "#333",
          color: "white",
          padding: "20px 0",
          textAlign: "center",
        }}
      >
        {/* Footer Links */}
        <div>
          <a href="#" style={linkStyle}>
            Home
          </a>
          <a href="#" style={linkStyle}>
            About
          </a>
          <a href="#" style={linkStyle}>
            Contact
          </a>
        </div>
  
        {/* Social Media Icons */}
        <div style={{ margin: "20px 0" }}>
          <a href="#" style={linkStyle}>
            Facebook
          </a>
          <a href="#" style={linkStyle}>
            Twitter
          </a>
          <a href="#" style={linkStyle}>
            Instagram
          </a>
        </div>
  
        {/* Copyright Info */}
        <div>
          <p style={{ margin: "0" }}>
            &copy; {new Date().getFullYear()} My Website. All rights reserved.
          </p>
        </div>
      </footer>
    );
  };
  
  const linkStyle = {
    margin: "0 10px",
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
  };



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

















