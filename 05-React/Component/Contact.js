import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div style={containerStyle}>
      {/* Title */}
      <h1 style={titleStyle}>Contact Us</h1>

      {/* Contact Form */}
      <form style={formStyle}>
        {/* Name Field */}
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Name:</label>
          <input
            type="text"
            placeholder="Your Name"
            style={inputStyle}
            required
          />
        </div>

        {/* Email Field */}
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Email:</label>
          <input
            type="email"
            placeholder="Your Email"
            style={inputStyle}
            required
          />
        </div>

        {/* Subject Field */}
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Subject:</label>
          <input
            type="text"
            placeholder="Subject"
            style={inputStyle}
            required
          />
        </div>

        {/* Message Field */}
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Message:</label>
          <textarea
            placeholder="Your Message"
            style={textareaStyle}
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div style={buttonContainerStyle}>
          <button type="submit" style={buttonStyle}>
            Submit
          </button>
        </div>
      </form>

      <Link to="/" style={linkStyle}>Back to Home</Link>

    </div>
  );
};



// Styles

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


const containerStyle = {
  padding: "20px",
  maxWidth: "600px",
  margin: "0 auto",
  fontFamily: "Arial, sans-serif",
};

const titleStyle = {
  textAlign: "center",
  color: "#333",
  marginBottom: "20px",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
};

const inputGroupStyle = {
  marginBottom: "15px",
};

const labelStyle = {
  marginBottom: "5px",
  color: "#333",
  fontSize: "16px",
};

const inputStyle = {
  padding: "10px",
  fontSize: "16px",
  width: "100%",
  border: "1px solid #ccc",
  borderRadius: "5px",
};

const textareaStyle = {
  padding: "10px",
  fontSize: "16px",
  width: "100%",
  height: "120px",
  border: "1px solid #ccc",
  borderRadius: "5px",
};

const buttonContainerStyle = {
  textAlign: "center",
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#333",
  color: "white",
  border: "none",
  borderRadius: "5px",
  fontSize: "16px",
  cursor: "pointer",
};

export default Contact;
