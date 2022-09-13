import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MotionDiv from "../MotionDiv"



function Education(props){

    return(
        <Container className="p-4 pb-5" id="Engineer">
            <MotionDiv content={
                <div>
                    <Row className="d-flex align-items-center justify-content-center">
                    <Col md={2} xs={4}>
                    <img className="img-fluid" src={props.object.logo}></img>
                    </Col>
                    <Col md={9} xs={12} >
                    <div className="img-fluid px-2">
                    <a style={{ textDecoration: 'none' }} target="_blank" href={props.object.website}><h4 className="display-inline textSerious textBlue">{props.object.university}</h4></a>
                    <h5 className="display-inline textSerious textGrey px-2">{props.object.location}</h5>
                    <br></br>
                    <h5 className="display-inline textSerious textGrey">{props.object.time}</h5>
                    <br></br>
                    <h5 className="display-inline left textSerious textLeft textBrown">{props.object.major}</h5>
                    </div>
                    </Col>
                    </Row>
                </div>
            }/>
        </Container>
    )
}

export default Education;
