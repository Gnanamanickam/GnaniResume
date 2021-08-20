import React, {useState, createRef} from 'react';

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardHeader,
    Col
} from "reactstrap"; 

// import ColorThief from "colorthief";

import { Fade } from 'react-reveal';

const EducationCard = ({data}) => {
    const [colorArrays, setColorArrays] = useState([]);
    const imgRef = createRef();

    // function  getColorArrays ( )  {
    //     const colorThief = new ColorThief();
    //     setColorArrays(colorThief.getColor(imgRef.current));
    // }

    function rgb(values) {
        return typeof values === "undefined" ? null : "rgb(" + values.join(', ') + ")";
    }

    return ( 
        <Col lg="5">
        <Fade left duration={1000} distance="40px">
            <Card style={{flex: 1, width: "320px", height: "400px"}} className="shadow-lg--hover shadow border-0 text-center rounded">
                <CardHeader style={{background: "#3E43E9"}} >
                    <h5 className="text-white">{data.college}</h5>
                </CardHeader>
                <CardBody className="py-5">
                    <img src={data.img} className=" bg-white rounded-circle mb-3 img-center img-fluid shadow-lg " style={{ width: "80px", height: "80px" }} alt=""/>
                    <CardTitle tag="h5" style={{ width: "280px", height: "50px" }}>{data.course}</CardTitle>
                    <CardSubtitle>{data.date}</CardSubtitle>
                    <CardText className="description my-3 text-center">
                        { data.grade }
                        <ul>
                            {
                                data.descBullets ? 
                                data.descBullets.map((grade) => {
                                    return <li key={grade}>{grade}</li>
                                }) : null
                            }
                        </ul>
                    </CardText>
                    <div>
                    </div>
                </CardBody>
            </Card>
            </Fade>
        </Col>
     );
}
 
export default EducationCard;