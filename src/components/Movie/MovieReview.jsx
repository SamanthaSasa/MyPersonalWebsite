import axios from "axios";
import React from "react";
import { useState } from "react";
import Review from "./Review"

const client = axios.create({
    baseURL: "http://localhost:5000/movieRecommend" 
  });



function MovieReview(){
  
    const [post, setPost] = useState([]);
   

    client.get().then((response) => {
      setPost(response.data);
    });
     



    return(
        post.map((movie) => 
        <Review movie = {movie}/>
        )
        )
}

export default MovieReview;