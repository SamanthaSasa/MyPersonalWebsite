import React from "react";


function Footer(){
    const year = new Date().getFullYear();
    return(
    <footer className="bg-green">
      <p>Copyright ⓒ {year}</p>
      <p>Xiyun Li</p>
    </footer>
    )
}

export default Footer;