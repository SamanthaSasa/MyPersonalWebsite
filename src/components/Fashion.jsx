import React from 'react'
import CuratorWidget from "./CuratorWidget"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const feedId = process.env.REACT_APP_FEED_ID;



function Fashion(){
    return(
        <div className="pb-4">
            <Container className="p-4 pt-5 pb-5">
            <h5 className='textRegular center-item textBrown pt-4'>— Find My OOTD on Red Book —</h5>
            <a target="_blank" style={{ textDecoration: 'none' }} href="https://www.xiaohongshu.com/user/profile/61272a9e000000000101f2db?xhsshare=CopyLink&appuid=61272a9e000000000101f2db&apptime=1662846350" >
            <h5 className='textFansy center-item textGrey py-2'>@SamanthaSasa</h5>
            </a>
            <Row className="d-flex align-items-center justify-content-center">
            <Col md={9} sm={12}>
            <a href="https://www.xiaohongshu.com/user/profile/61272a9e000000000101f2db?xhsshare=CopyLink&appuid=61272a9e000000000101f2db&apptime=1662846350" >
            <img className="img-fluid py-4 pb-5" src="https://i.postimg.cc/FKJSLKDc/redbook2.png"/>
            </a>
            </Col>
            <h5 className='textRegular center-item textBrown pt-4'>— My Instagram Feed —</h5>
            <a target="_blank" style={{ textDecoration: 'none' }} href="https://www.instagram.com/samanthasasa77/" >
            <h5 className='textFansy center-item textGrey py-2'>@samanthasasa77</h5>
            </a>
            <Col className=" py-4 pb-5" md={10} sm={12}>
            <CuratorWidget feedId={feedId}/>
            </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Fashion;