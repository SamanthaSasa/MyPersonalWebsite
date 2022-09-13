import React, { useState } from "react";
import { useSpring, animated } from 'react-spring'



function Introduction(){

    const [appear,makeAppear] = React.useState(false);
    
    const contentProps = useSpring({
        opacity: appear ? 1 : 0,
        marginTop: appear ? 10 : -100,
        config:{mass:1.2, tension:50, friction:10},
      });
        setTimeout(() => {makeAppear(true)}, 100);
    
    return(
        <div className="bg-green intro">
        <header onClick={makeAppear}>
            <animated.div style={contentProps} className="center-item">
            <h1 className="textFansy textImportant">Hey!</h1>
            <h2 className="textChinese textImportant">你好！</h2>
            <br></br>
            <h4 className="textFansy textCommon">Here is</h4>
            <h2 className="textFansy textImportant"> Xiyun Li</h2>
            <br></br>
            <h4 className="textFansy textCommon">and feel free to call me </h4>
            <h3 class="textFansy textImportant">Samantha</h3>
            <h4 class="textFansy textCommon pb-5">if you prefer :)</h4>
            </animated.div>
        </header>
        <div className="blockSpace"/>
        <h3 className="textFansy textImportant explore">Explore more!</h3>
        <img className='arrowIcon' src="https://i.postimg.cc/nhn4zDpM/arrow.png" />
        </div>
    )
}

export default Introduction;