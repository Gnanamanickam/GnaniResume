import React from 'react';
import { educationInfo } from '../Containers/educationInfo';
import {
    Container,
    Row,
} from "reactstrap";

import { Fade } from 'react-reveal';
import EducationCard from '../Containers/EducationCard';

const Education = () => {
    return ( 
        <div className="right-side-area">
        <div id="education" className="single-section about-area">
        <div className="container">
        <section className="section section-lg">
            <Container>
              <Fade left duration={1000} distance="40px">
              <div className="d-flex p-4">
                    <div className="section-heading">
                        <h2 className="section-title">Education</h2>
                    </div>
                </div>
                <Row className="row-grid align-items-center">
                    {
                        educationInfo.map((data, i) => {
                            return <EducationCard key={i} data={data} />
                        })
                    }
                </Row>
              </Fade>
            </Container>
          </section>
            </div>
            </div>
            </div>
    )
}
 
export default Education;