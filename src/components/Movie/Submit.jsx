import React from "react";

function Submit(props){
    if (props.message != ''){
        return(
            <p className="message">{props.message}</p>
        )
    }
}

export default Submit;