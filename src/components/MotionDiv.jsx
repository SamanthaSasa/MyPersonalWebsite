import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


function MotionDiv(props){
    const controls = useAnimation();
    const [ref, inView] = useInView();
    
    useEffect(() => {
      if (inView) {
        controls.start("show");
      }
    }, [controls, inView]);
  
    const item = {
      hidden: {
        opacity: 0,
        y: 50,
        transition: { ease: [0.78, 0.14, 0.15, 0.86] }
      },
      show: {
        opacity: 1,
        y: 0,
        transition: { ease: [0.78, 0.14, 0.15, 0.86],duration: 0.5 }
      }
    };
    return(
            <motion.div variants={item} initial="hidden" animate={controls} ref={ref}>
                {props.content}
            </motion.div>
       
    )
}

export default MotionDiv;