
import React, { useState } from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import Button from "react-bootstrap/Button";

const Sidebar = () => {
    return (
        <div className="left-side-area">
        <header className="header-left-area">
            <nav className="navbar">
                <div className="header-content">
                    <div className="image-item">
                        <div className="status active"></div>
                        <img src="images/Gnani.jpg" alt="" />
                    </div>
                    <div className="caption-area">
                        <h5 className="name">Gnani</h5>
                        <h6 className="designation skills cd-headline clip">
                            <span className="cd-words-wrapper">
                                <b className="is-visible">&nbsp;Developer</b>
                                <b>&nbsp;Grad&nbsp;CS&nbsp;Student</b>
                            </span>
                        </h6>
                    </div>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#side-menu" aria-controls="side-menu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                        <span className="icon-thumbnails"></span>
                    </span>
                </button>
                <div className="menu-main-area align-items-center">
                    <div className="collapse navbar-collapse" id="side-menu">
                        <ul id="menu_scroll" className="navbar-nav side-menu">
                            <li>
                                <a href="#home" className="scroll active">
                                    <span className="icon-home-house-streamline" style={{top: "10px"}}></span>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="scroll">
                                    <span className="icon-map-streamline-user" style={{top: "10px"}}></span>
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#education" className="scroll">
                                    <span className="icon-book-read-streamline" style={{top: "10px"}}></span>
                                    Education
                                </a>
                            </li>
                            <li>
                                <a href="#experience" className="scroll">
                                    <span className="icon-dashboard-speed-streamline" style={{top: "10px"}}></span>
                                    Experience
                                </a>
                            </li>
                            <li>
                                <a href="#skills" className="scroll">
                                    <span className="icon-settings-streamline-1" style={{top: "10px"}}></span>
                                    Skills
                                </a>
                            </li>
                            {/* <li>
                                <a href="#blog" className="scroll">
                                    <span className="icon-design-graphic-tablet-streamline-tablet" style={{top: "10px"}}></span>
                                    Blog
                                </a>
                            </li> */}
                            <li>
                                <a href="#contact" className="scroll">
                                    <span className="icon-speech-streamline-talk-user" style={{top: "10px"}}></span>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <span />
                <span />
                <span />
                <div className="btn-wrapper text-lg">
                <ul className="header-social-icons">
                            <li>
                                <a href="https://www.facebook.com/Gnanamanickam.A" target="_blank" title="Facebook">
                                    <i className="fa fa-facebook-square"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/imGmanick" target="_blank" title="Twitter">
                                    <i className="fa fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/gnanamanickam/" target="_blank" title="Instagram">
                                    <i className="fa fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/Gnanamanickam" target="_blank" title="Github">
                                    <i className="fa fa-github"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/gnanamanickam/" target="_blank" title="LinkedIn">
                                    <i className="fa fa-linkedin"></i>
                                </a>
                            </li>
                        </ul>
                </div>
            </nav>
            </header>
        </div>
    );
}

export default Sidebar;
