import React, { useState } from 'react';
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/logo.jpg";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="navbar-container">
            <div className="navbar-logo">
                <img src={logo} alt="Company Logo" />
            </div>
            <div className="navbar-icon" onClick={toggleMenu}>
                <GiHamburgerMenu className='hamicon'/>
            </div>
            <div className={`menu-btn-container ${isMenuOpen ? "active" : ""}`}>
                <ul className="navbar-menus">
                    <li>Home</li>
                    <li>Services</li>
                    <li>About</li>
                    <li>Blogs</li>
                </ul>
                <div className="navbar-btns">
                    <button>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
