import React from "react";
import MyNavbar from "./MyNavbar"
import Introduction from "./Introduction"
import Movies from "./Movie/Movie"
import Engineer from "./Engineer/Engineer"
import Footer from "./Footer"
import ScrollDivider from "./ScrollDivider"
import FunFact from "./FunFact"
import Gallery from "./Gallery"
import Fashion from "./Fashion"
import More from "./More"
import "bootstrap/dist/css/bootstrap.min.css";

const Divider =
[{
  "img":"https://i.postimg.cc/1RcK9pW9/cannes2.jpg",
  "quote":"\"Cinécriture isn't the scenario, it's the ensemble of exploratory walks, the choices, the inspiration, the words one writes, the shooting, the editing: the film is the product of all these different moments.\""
},{
  "img":"https://i.postimg.cc/rFjhgC6M/18650011.png",
  "quote":"\"From the black ocean comes the appearance of light and waves. It helps you imagine birth. I want imagination in the photographs I take. It's like a prologue. You wonder, What's going on? You feel something is going to happen.\""
},
{
  "img":"https://i.postimg.cc/vmD4NpHQ/lourve.jpg",
  "quote":"\"Fashion is something that you can attach to yourself, put on, and through that interaction, the meaning of it is born.\""
},
{"img":"https://i.postimg.cc/2SNBsVbT/tower.jpg",
"quote":"\"It must be admitted, however, that life in more's Utopia, as in most others, would be intolerably dull. Diversity is essential to happiness, and in Utopia there is hardly any. This is a defect of all planned social systems, actual as well as imaginary.\""}
];


function App() {
  return (
    <div>
      <Introduction />
      <MyNavbar />
      <FunFact />
      <Engineer />
      <div className="bg-Light">
      <div id="Cinephile">
      <ScrollDivider img={Divider[0].img} quote={Divider[0].quote}/>
      <Movies/>
      </div>
      <div id="Shutterbug">
      <ScrollDivider img={Divider[1].img} quote={Divider[1].quote}/>
      <Gallery/>
      </div>
      <div id="Fashion">
      <ScrollDivider img={Divider[2].img} quote={Divider[2].quote}/>
      <Fashion />
      </div>
      <div id="more">
      <ScrollDivider img={Divider[3].img} quote={Divider[3].quote}/>
      <More />
      </div>
      </div >  
      <Footer/>
    </div>
    
  );
}

export default App;
