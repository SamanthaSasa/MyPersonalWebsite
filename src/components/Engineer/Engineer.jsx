import React from "react";
import MyJourney from "./MyJourney"
import MyProject from "./MyProject"

function Engineer(){
    return(
        <div className="p-4 pb-5" id="Engineer">
        <MyJourney />
        <MyProject />
        <div className="py-4"/>
        </div>
    )
}

export default Engineer;