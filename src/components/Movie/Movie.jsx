import React from "react";
import MovieRecommend from "./MovieRecommend"
import MyMovies from "./MyMovies"

function Movies(){
    return(
        <div className="p-5">
        <MyMovies/>
        <MovieRecommend/>
        </div>
    )
}

export default Movies;