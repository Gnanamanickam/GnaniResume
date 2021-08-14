
import React, { useState } from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

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
                                    <span className="icon-home-house-streamline"></span>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="scroll">
                                    <span className="icon-map-streamline-user"></span>
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#experience" className="scroll">
                                    <span className="icon-dashboard-speed-streamline"></span>
                                    Experience
                                </a>
                            </li>
                            <li>
                                <a href="#skills" className="scroll">
                                    <span className="icon-speech-streamline-talk-user"></span>
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a href="#blog" className="scroll">
                                    <span className="icon-design-graphic-tablet-streamline-tablet"></span>
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="scroll">
                                    <span className="icon-speech-streamline-talk-user"></span>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="btn-wrapper text-lg">
                <ul class="header-social-icons">
                            <li>
                                <a href="https://www.facebook.com/Gnanamanickam.A" target="_blank" title="Facebook">
                                    <i class="fa fa-facebook-square"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/imGmanick" target="_blank" title="Twitter">
                                    <i class="fa fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/gnanamanickam/" target="_blank" title="Instagram">
                                    <i class="fa fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/Gnanamanickam" target="_blank" title="Github">
                                    <i class="fa fa-github"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/gnanamanickam/" target="_blank" title="LinkedIn">
                                    <i class="fa fa-linkedin"></i>
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
