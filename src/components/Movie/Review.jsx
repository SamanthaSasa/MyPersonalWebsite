import React from "react";

function Review(props){
    let review = props.movie.review;
    let username = props.movie.username;
    let title = props.movie.title;

    if(review != null){
        review = ':"'+review + '"';
    }

    if(username != null){
        username = "——"+username;
    }

    return(
        <div>
        <h3 className="textFansy text-green display-inline">{title}</h3>
        <p className="textRegular textBrown display-inline">{review}</p>
        <p className="textRegular textBrown display-inline">{username}</p>
        </div>
        )
}

export default Review