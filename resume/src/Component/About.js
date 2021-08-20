import React from 'react';
import Animation from "./Animation";
import web from "../Assets/web.json"

const About = () => {

    return (
        <div className="right-side-area">
            <div id="about" className="single-section about-area">
                <div className="container">
                    <div className="row">

                        <div className="col-sm-12 col-lg-6">
                        {/* <Animation animationData={web} /> */}
                        <img src="images/about.png" alt="about" className="img-fluid" />
                        </div>

                        <div className="col-sm-12 col-lg-6">
                            <div className="about-content">

                                <div className="section-heading">
                                    <h2 className="section-title">About Me</h2>
                                    <h6 className="about-role">I am a Full-Stack Developer</h6>
                                </div>

                                <p>👋Hi! I’m Gnani.</p>
                                <p> I’m currently a Graduate Student in Computer Science at the University of Illinois at Chicago. I'm a software engineer specialised in frontend and backend development for complex scalable web apps.. Please feel free to contact me below </p>
                            </div>
                            <a className="btn scroll button-scheme" href="#contact">Contact Me</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
}

            export default About;