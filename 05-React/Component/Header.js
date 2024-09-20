import { Link } from "react-router-dom";
import { useState , useEffect } from "react";

const Header = () => {

    return (
        <nav className="navbar">
            <div className="logo">
                <img src="https://png.pngtree.com/png-vector/20221231/ourmid/pngtree-food-delivery-logo-template-design-sign-menu-vector-png-image_43664212.jpg"></img>
            </div>
            <ul className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="*">Service</Link> 
            </ul>
        </nav>
    )
};

export default Header