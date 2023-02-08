import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <header id="header" className="fixed-top d-flex align-items-center">
                <div className="container d-flex align-items-center justify-content-between">

                    <div className="logo">
                        <h1 className="text-light"><a href="index.html"><span>Ninestars</span></a></h1>
                    </div>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a className="nav-link scrollto active" href="/home">Home</a></li>
                            <li><a className="nav-link scrollto" href="/service">About Us</a></li>
                            <li><a className="nav-link scrollto" href="/service2">Services</a></li>
                            <NavLink className="nav-link scrollto" to="/service3">Contact</NavLink>
                            <li><a className="nav-link scrollto" href="#team">Team</a></li>
                            <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><a href="#">Drop Down 1</a></li>
                                    <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                                        <ul>
                                            <li><a href="#">Deep Drop Down 1</a></li>
                                            <li><a href="#">Deep Drop Down 2</a></li>
                                            <li><a href="#">Deep Drop Down 3</a></li>
                                            <li><a href="#">Deep Drop Down 4</a></li>
                                            <li><a href="#">Deep Drop Down 5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Drop Down 2</a></li>
                                    <li><a href="#">Drop Down 3</a></li>
                                    <li><a href="#">Drop Down 4</a></li>
                                </ul>
                            </li>
                            <li><a className="nav-link scrollto" href="/contact1">Contact</a></li>
                            <li><a className="getstarted scrollto" href="#about">Get Started</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                </div>
            </header>
        </div>
    )
};

export default Header;
