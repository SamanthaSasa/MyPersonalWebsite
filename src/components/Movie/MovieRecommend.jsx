import React from "react";
import { useState, useEffect } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import MovieReview from "./MovieReview"
import Submit from "./Submit"


const client = axios.create({
    baseURL: "http://localhost:5000/movieRecommend" 
  });


function MovieRecommend(){

    const [submit, setSubmit] = useState(false);
    const [message,setMessage] =useState('');

    const [movieRecommend, setMovieRecommend] = useState({});

    function handleChange(change){
        setSubmit(false);
        switch(change.name) {
            case "title":
                setMovieRecommend({...movieRecommend, title:change.value})
              break;
            case "review":
                setMovieRecommend({...movieRecommend, review:change.value})
              break;
            case "username":
                setMovieRecommend({...movieRecommend, username:change.value})
          }
    }

    function handleSubmit(event){
        event.preventDefault();
        if(submit == true){
            setMessage("Anything new for me?");
        }else{
            if(movieRecommend.title == null){
                setMessage("Uh-oh! The movie seems lose its title...");
            }else{
                client.post('', movieRecommend)
                .then(()=> {
                    setSubmit(true);
                    setMessage("Succesfully submitted!")
                })
                .catch(() => {
                    setMessage("Oops! Something went wrong, please try again!");
                })}
        }
        };



    return(
        <Container className='blockSpace center'>
        <Row>
        <Col xl={6} s={12}>
        <div className="movieRecommend">
            <h4 className="textFansy textBrown display-inline">Share your favorites with me!</h4>
            <h6 className="textFansy textBrown display-inline">It's gonna be here soon→</h6>
            <form onSubmit={handleSubmit}>
            <InputGroup className="input">
            <InputGroup.Text id="basic-addon1">Movie Title *</InputGroup.Text>
            <Form.Control
            placeholder='"Titanic"'
            name="title"
            value={movieRecommend.title}
            onChange={event => handleChange(event.target)}
            />

            </InputGroup>
            <InputGroup className="input">
            <InputGroup.Text>Review or Anything</InputGroup.Text>
            <Form.Control 
            as="textarea"
            placeholder='"Definetly a masterpiece!"'
            name="review"
            value={movieRecommend.review}
            onChange={event => handleChange(event.target)}
            />
            </InputGroup>  
            <InputGroup className="input">
            <InputGroup.Text id="basic-addon1">By Reviewer</InputGroup.Text>
            <Form.Control
            placeholder='"Jack Dawson"'
            name="username"
            value={movieRecommend.username}
            onChange={event => handleChange(event.target)}
            />
            </InputGroup>
            <Submit submit = {submit} message = {message}/>
            <Button variant="outline-secondary" type="submit">Submit</Button>
            </form>
        </div>
        </Col>
        <Col xl={6} s={12}>
        <h4 className="textFansy boldtextBrown">Newest Shares:</h4>
        <MovieReview key = {submit}/>
        </Col>
        </Row>
        </Container>
        
    )
}

export default MovieRecommend;
