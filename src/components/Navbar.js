import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from "../modules/images/logo.png";

const Navbar = () => {
    return (
        <nav id="scrl">
            <div class="icon-menu">
                <FaBars size={30} id="menuIcon" />
                <FaTimes size={30} id="closeIcon" />
            </div>
            <div class="logo">
                <img src={logo} alt="Logo Proclub" />
            </div>
            <div class="menu">
                <ul id="list-menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#serv">Services</a></li>
                    <li><a href="#proj">Projects</a></li>
                    <li><a href="#partner">Partners</a></li>
                    <li><a href="#bio">Bio</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
