import React from "react";
import { MdEmail,MdLocationOn } from 'react-icons/md';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer(){
    const year = new Date().getFullYear();
    return(
    <div className="bg-green py-4">
    <Container>
    <Row className="d-flex align-items-center justify-content-center text-center">
    <Col md={6} sm={12}>
    <MdEmail className="textCommon"/>
    <a style={{ textDecoration: 'none' }} className="display-inlineblock py-2 p-1" href="mailto:xiyunsamanthali@gmail.com"><h7 className="textCommon" >xiyunsamanthali@gmail.com</h7></a>
    <br/>
    <MdLocationOn className="textCommon"/>
    <h7 className="textCommon" >Leuven, 3000, Belgium</h7>
    <br />
    </Col>
    <Col  md={6} sm={12}>
    <h7 className="textCommon textRegular pt-2"> © {year} Xiyun Li.</h7>
    <br/>
    <h7 className="textCommon textRegular"> All rights reserved.</h7>
    </Col>
    </Row>
    </Container>
    </div>
    )
}

export default Footer;