import React from 'react';
import { Container, Row, Col } from "reactstrap";
import ExperienceCard from '../Containers/ExperienceCard';
import { experienceInfo } from '../Containers/experienceinfo';

const Experience = () => {

    return (
        <div className="right-side-area">
            <div id="experience" className="single-section about-area">
                <section className="section pb-0 bg-gradient-info my-5">
                    <Container>
                        <div className="d-flex px-3">
                            <div className="section-heading">
                                <h2 className="section-title">Experience</h2>
                            </div>
                        </div>
                        <Row className="row-grid align-items-center">
                            {
                                experienceInfo.map(info => {
                                    return <Col className="order-lg-1" lg="6" key={info.name}><ExperienceCard experience={info} /></Col>
                                })
                            }
                        </Row>
                    </Container>
                </section>
            </div>
        </div>
    )
}

export default Experience;