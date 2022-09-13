import React from "react";
import Project1 from "./Project1"
import Project2 from "./Project2"


const projects = [
    {
        "nr":"1",
        "time":"2022",
        "name":"Mechanical Sequencing Machine",
        "course":"From Engineering Experience 2: Machine Design",
        "team":[
        {"name":"Yang Li"},
        {"name":"Kavishk Kathayat"},
        {"name":"Krishnaa Selvaraju"},
        {"name":"Alvaro Piergili De Escalada"}
        ],
        "img1":"https://i.postimg.cc/ZnBSvCWq/full-model.png",
        "img2":"https://i.postimg.cc/4NMkPRYj/s.jpg",
        "video":"https://www.youtube.com/embed/14ZTqE85iOg?loop=1&modestbranding=1&playsinline=1&rel=0&enablejsapi=1",
    },
    {
        "nr":"2",
        "time":"2021",
        "name":"Smart Home System Based on Raspberry Pi",
        "course":"From Engineering Experience 2: Machine Design",
        "team":[
        {"name":"Hanyuan Zhang"},
        ],
        "img1":"https://i.postimg.cc/65ZkQGxY/structure.png",
        "video":"https://www.youtube.com/embed/OxJf8XCMXVs?loop=1&modestbranding=1&playsinline=1&rel=0&enablejsapi=1",
    }
];


function MyProject(){
    return(
        <div className="py-4">
        <h5 className='textRegular textBrown center-item'>— What I Have Done —</h5>
        {projects.filter(project => project.nr =="1").map((project) => 
            <Project1 object = {project}/>
            )}
        {projects.filter(project => project.nr =="2").map((project) => 
            <Project2 object = {project}/>
            )}
        </div>
    )
}


export default MyProject;