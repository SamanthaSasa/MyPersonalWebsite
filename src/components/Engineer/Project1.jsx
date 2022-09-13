import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Project1(props){
    return(
        <div>
        <Container className="p-4">
        <Row className="d-flex align-items-center justify-content-center">
        <Col lg={3} md={12}>
        <h5 className="textBrown textSerious">{props.object.time}</h5>
        <h5 className="textBrown textSerious pt-2">{props.object.name}</h5>
        <h6 className="textBrown textSerious pb-4 textGrey">{props.object.course}</h6>
        <h5 className="textBrown textSerious display-inlineblock top">With:</h5>
        <div className="display-inlineblock px-2">
        {props.object.team.map((member) => 
        <h6 className="textBrown textFansy py-1">{member.name}</h6>
        )}
        </div>
        </Col>
        <Col lg={3} md={6} className="py-3">
        <img className="img-fluid zoom-project" src={props.object.img1}/>
        </Col>
        <Col lg={3} md={6} className="py-3">
            <img className="img-fluid zoom-project" src={props.object.img2}/>
        </Col>
        <Col lg={3} md={12} className="py-3">
            <iframe className="video zoom-project" src={props.object.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Col>
        </Row>
        </Container>
    </div>
    )
}

export default Project1;