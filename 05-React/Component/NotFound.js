import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>404</h1>
      <p style={messageStyle}>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" style={linkStyle}>Go back to Home</Link>
    </div>
  );
};

// Styles
const containerStyle = {
  textAlign: "center",
  padding: "50px",
  fontFamily: "Arial, sans-serif",
};

const titleStyle = {
  fontSize: "72px",
  color: "#333",
};

const messageStyle = {
  fontSize: "24px",
  color: "#555",
};

const linkStyle = {
  marginTop: "20px",
  display: "inline-block",
  padding: "10px 20px",
  backgroundColor: "#333",
  color: "white",
  textDecoration: "none",
  borderRadius: "5px",
  fontSize: "16px",
};

export default NotFound;
