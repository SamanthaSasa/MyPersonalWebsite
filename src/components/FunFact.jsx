import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MotionDiv from './MotionDiv'


function FunFact(){
    return(
            <Container className="p-4 pt-5">
            <Row className="d-flex align-items-center justify-content-around pt-5">
            <Col className="pt-2" md={5} sm={10}>
            <img className="img-fluid" src="https://i.postimg.cc/ZKpqgS6x/prague2.jpg"></img>
            </Col>
            <Col md={6} sm={12} >
                <h1 className="textSerious keyword pb-5">A few fun facts about me.</h1>
                <MotionDiv content={<div>
                    <h5 className="textRegular text-green display-inline">I'm a</h5>
                    <h3 className="textFansy text-green display-inline keyword">coffee addict</h3>
                    <p className="pb-2"/>
                    </div>}/>
                <MotionDiv content={<div>
                    <h5 className="textRegular text-green display-inline">My lucky number is</h5>
                    <h3 className="textFansy text-green display-inline keyword">7</h3>
                    <p className="pb-2"/>
                    </div>}/>
                <MotionDiv content={<div>
                    <h5 className="textRegular text-green display-inline">I'm a</h5>
                    <h3 className="textFansy text-green display-inline keyword">cat person</h3>
                    <h5 className="textRegular text-green display-inline">but never got the chance to have one :( </h5>
                    <p  className="pb-2"/>
                    </div>}/>
                <MotionDiv content={<div>
                    <h5 className="textRegular text-green display-inline">My name in Chinese means</h5>
                    <h3 className="textFansy text-green display-inline keyword">the lingering charm of a little stream in forest</h3>
                    <p  className="pb-2"/>
                    </div>}/>
                <MotionDiv content={<div>
                    <h5 className="textRegular text-green display-inline">I can</h5>
                    <h3 className="textFansy text-green display-inline keyword">put my whole fist into my mouth</h3>
                    <h6 className="textRegular text-green display-inline">(Ask me to show you lol)</h6>
                    </div>}/>
            </Col>
            </Row>
            </Container>
       
    )
}

export default FunFact;