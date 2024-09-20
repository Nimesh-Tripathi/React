import React from "react";
import { Link } from "react-router-dom";


const About = () => {
  return (
    <div style={containerStyle}>
      {/* Title */}
      <h1 style={titleStyle}>About Us</h1>

      {/* Description */}
      <p style={descriptionStyle}>
        Welcome to our company! We are dedicated to providing top-quality
        services and products to our customers. Our team is passionate about
        delivering innovative solutions that meet the needs of today's ever-changing
        world.
      </p>

      {/* Team/Company Info */}
      <div style={sectionStyle}>
        <h2 style={subtitleStyle}>Our Mission</h2>
        <p>
          Our mission is to create value for our clients by offering the best
          services and continuously innovating in our field. We strive to make
          a positive impact in every project we take on.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={subtitleStyle}>Our Team</h2>
        <p>
          We are a team of professionals with diverse skills and expertise,
          committed to working together to achieve the best outcomes. Our team
          values creativity, collaboration, and excellence in everything we do.
        </p>
      </div>

      <Link to="/" style={linkStyle}>Back to Home</Link>

    </div>
  );
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

const containerStyle = {
  padding: "20px",
  maxWidth: "800px",
  margin: "0 auto",
  fontFamily: "Arial, sans-serif",
};

const titleStyle = {
  textAlign: "center",
  color: "#333",
};

const descriptionStyle = {
  fontSize: "18px",
  lineHeight: "1.6",
  color: "#555",
  marginBottom: "20px",
};

const sectionStyle = {
  marginBottom: "20px",
};

const subtitleStyle = {
  color: "#333",
  fontSize: "22px",
  marginBottom: "10px",
};

export default About;
