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

export default Footer;