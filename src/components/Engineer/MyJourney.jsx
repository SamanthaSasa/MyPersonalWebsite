import React from "react";
import Education from "./Education"


const educations = [
    {"university":"KU Leuven",
    "location":"Leuven, Belgium",
    "time":"Sep. 2021-present",
    "major":"Bachelor of Engineering Electromechanical",
    "logo":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/KU_Leuven_logo.svg/1200px-KU_Leuven_logo.svg.png",
    "website":"https://www.kuleuven.be/english/kuleuven/"
},
    {"university":"Wuhan University of Technology",
    "location":"Wuhan, China",
    "time":"Sep. 2019-2021",
    "major":"Bachelor of Engineering in Automotive Engineering",
    "logo":"https://www.eastjuntai.com/uploads/image/20220111/17/wuhan-university-of-technology-campus7.jpg",
    "website":"http://english.whut.edu.cn/"
}];


function MyJourney(){
    return(
        <div className="p-5">
        <div className="center-item pt-4">
        <h5 className='textRegular textBrown'>— My Journey —</h5>
        </div>
        {educations.map((education) => 
        <Education object = {education}/>
        )}
        </div>
    )
}

export default MyJourney;