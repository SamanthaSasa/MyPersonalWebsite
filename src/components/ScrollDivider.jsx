import React from "react";
import { Parallax, Background } from "react-parallax";


function ScrollDivider(props){
    return (
      <Parallax bgImage={props.img} strength={200}>
      <div className="Folio_Card">
      <div className="txt">{props.quote}</div>
      </div>
      </Parallax>
);}

export default ScrollDivider;