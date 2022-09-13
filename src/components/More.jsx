import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsMedium,BsInstagram,BsLinkedin,BsGithub } from 'react-icons/bs';
import MotionDiv from './MotionDiv';


function More(){
    return(
            <Container className="py-5">
                <MotionDiv content={
                <Row className="d-flex align-items-center justify-content-center">
                    <Col xl={8} md={10} sm={12}>
                    <h1 className="p-5 pb-4 textSerious textBrown" >Besides all those mentioned, I would like to identify myself as  a daughter, gamer, thinker, and feminist as well.</h1>
                    <h3 className="px-5 pt-5 textFansy textGrey" >Don't hesitate to explore more!</h3>
                    </Col>
                </Row>}/>
                <MotionDiv content={
                <Row className="d-flex align-items-center justify-content-center text-center">
                    <Col md={8} sm={12}>
                    <a target="_blank" style={{ textDecoration: 'none' }} href="https://www.linkedin.com/in/XiyunLi"><BsLinkedin className='icon'/></a>
                    <a target="_blank" style={{ textDecoration: 'none' }} href="https://www.instagram.com/samanthasasa77/"><BsInstagram className='icon'/></a>
                    <a target="_blank" style={{ textDecoration: 'none' }} href="https://github.com/SamanthaSasa"><BsGithub className='icon'/></a>
                    <a target="_blank" style={{ textDecoration: 'none' }} href="https://medium.com/@xiyunli"><BsMedium className='icon'/></a>
                    </Col>
                </Row>}/>
                <MotionDiv content={
                <Row className="d-flex align-items-center justify-content-center">
                    <Col xl={8} md={10} sm={12}>
                    <h3 className="px-5 pt-4 textFansy textGrey" >And you can also directly contact me through:</h3>
                    </Col>
                </Row>}/>

                <MotionDiv content={
                <Row className="d-flex align-items-center justify-content-center text-center">
                    <Col className="pb-4" xl={8} md={10} sm={12}>
                    <a style={{ textDecoration: 'none' }} href="mailto:xiyunsamanthali@gmail.com"><h4 className="px-5 pt-3 pb-5 textSerious text-green underline keyword" >xiyunsamanthali@gmail.com</h4></a>    
                    </Col>
                    </Row>}/>
            </Container>
            

    )
}

export default More;