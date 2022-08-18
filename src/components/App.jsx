import React from "react";
import { useState, useEffect } from "react";
import MyNavbar from "./MyNavbar"
import Introduction from "./Introduction"
import Movies from "./Movie/Movie"
import Footer from "./Footer"
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div>
      <Introduction />
      <MyNavbar />
      <Movies/>
      <Footer/>
    </div>
    
  );
}

export default App;
