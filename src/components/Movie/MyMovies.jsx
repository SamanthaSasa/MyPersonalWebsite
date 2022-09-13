import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const moviesData = [
  {"name":"interstellar","imdb":"https://www.imdb.com/title/tt0816692/?ref_=nv_sr_srsg_0","img":"https://i.postimg.cc/bYV96bpP/interstellar-poster.jpg","type":"lifetime"},
  {"name":"thelma_and_louise","imdb":"https://www.imdb.com/title/tt0103074/?ref_=nv_sr_srsg_0","img":"https://i.postimg.cc/sDt9zrM0/thelma-and-louise-poster.jpg","type":"lifetime"},
  {"name":"four_month","imdb":"https://www.imdb.com/title/tt1032846/?ref_=nv_sr_srsg_0","img":"https://i.postimg.cc/ZnQPCkVn/4month-poster.jpg","type":"recent"},
  {"name":"dalva","imdb":"https://www.imdb.com/title/tt19768016/?ref_=fn_al_tt_1","img":"https://i.postimg.cc/k41Kp3rs/dalva-poster.jpg","type":"recent"},
  {"name":"drive_my_car","imdb":"https://www.imdb.com/title/tt14039582/?ref_=fn_al_tt_1","img":"https://i.postimg.cc/Qd1gxy5N/drive-my-car-poster.jpg","type":"recent"},
  {"name":"perfect_blue","imdb":"https://www.imdb.com/title/tt0156887/?ref_=tt_mv_close","img":"https://i.postimg.cc/fbvxYSB6/perfect-blue-poster.jpg","type":"lifetime"},
  {"name":"portrait","imdb":"https://www.imdb.com/title/tt8613070/?ref_=nv_sr_srsg_0","img":"https://i.postimg.cc/c4KMPHLn/portrait-de-la-jeune-fille-en-feu-poster.jpg","type":"lifetime"},
  {"name":"tori_and_lokita","imdb":"https://www.imdb.com/title/tt18317064/?ref_=fn_al_tt_1","img":"https://i.postimg.cc/4dNpP40n/Tori-and-Lokita.jpg","type":"recent"},
]

function MyMovies() {

  const lifetimeMovies = moviesData.filter(movieData =>
    movieData.type == "lifetime").map((movieData) => 
      <Col md={3} xs={6}><a href={movieData.imdb} target="_blank"><img className='img-fluid zoom-poster poster' src={movieData.img} /></a></Col>
      );

  const recentMovies = moviesData.filter(movieData =>
    movieData.type == "recent").map((movieData) => 
      <Col md={3} xs={6}><a href={movieData.imdb} target="_blank"><img className='img-fluid zoom-poster poster' src={movieData.img} /></a></Col>
      );

  return (
    <div>
    <Container>
    <Row>
      <h5 className='textRegular center-item textBrown p-4 pt-3'>— My Lifetime Favorites —</h5>
      {lifetimeMovies}
      <div className="m-3"></div>
      <h5 className='textRegular center-item pb-4 pt-5'>— My Recent Recommends —</h5>
      {recentMovies}
      <div className="m-4 pb-4"></div>
    </Row>
    </Container>
    </div>

    );
}

export default MyMovies;