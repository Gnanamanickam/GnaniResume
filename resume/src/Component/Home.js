
import React, { useEffect } from "react";
import { Fade } from 'react-reveal';
import { Button, Container, Row, Col } from "reactstrap";
import animation from "../Assets/animation.json"

import Animation from "./Animation";

const HomePage = () => {
    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
    })
    return (
        <Fade top duration={1000} distance="40px">
            <main ref="main">
                <div id="home" className="right-side-area home-area wave-area">
                        <div className="water-effect"></div>
                        <div className="container h-100">
                            <div className="row h-100 align-items-center justify-content-center">
                                <div className="col-12 col-md-8 col-lg-8 home-content text-center">
                                    <h5 className="greet">
                                        Hello 👋🏻, My name is <strong>Gnani</strong>
                                    </h5>
                                    <h1 className="skills cd-headline letters scale">
                                        <span>I'm a</span>
                                        <span className="cd-words-wrapper">
                                            <b className="is-visible">&nbsp;Developer</b>
                                            <b>&nbsp;Grad&nbsp;CS&nbsp;Student</b>
                                        </span>
                                    </h1>
                                    <p className="description">A passionate Full Stack Developer having an experience of building applications and work experience of over 4 years </p>
                                    <div className="button-area" style={{position: "relative", zIndex: "100002"}}>
                                        <Button style={{position: "relative", zIndex: "100000"}} className="btn-primary" href="Resume.pdf">Download Resume</Button>
                                        <Button style={{position: "relative", zIndex: "100001"}} className="btn-primary button-scheme" href="#contact">Contact Me</Button>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 col-lg-4 home-content text-center">
                                <img src="images/home.svg" alt="about" className="img-fluid" />
                                </div>
                            </div>
                        </div>

                        {/* <div class="col-sm-12 col-lg-6">
                                    <Animation animationData={animation} />
                                    </div> */}
                            {/* <div className="separator separator-bottom separator-skew">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    preserveAspectRatio="none"
                                    version="1.1"
                                    viewBox="0 0 2560 100"
                                    x="0"
                                    y="0"
                                >
                                    <polygon
                                        className="fill-white"
                                        points="2560 0 2560 100 0 100"
                                    />
                                </svg>
                </div> */}
                </div>
            </main>
        </Fade>

    );
}

export default HomePage;
