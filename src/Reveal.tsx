import React, {useEffect, useRef} from "react";
import {motion, useInView, useAnimation} from "framer-motion";

interface Props{
    children: JSX.Element;
    width?: "fit-content" | "100%"; 
}

export const Reveal = ({ children, width = "fit-content"}: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const mainControl = useAnimation();

    useEffect(()=>{
        if (isInView){
            mainControl.start("visible");
        }
    }, [isInView]);

    return(
        <div ref ={ref} style={{position: "relative", width, overflow: "visible"}}>
            <motion.div
                variants ={{
                    hidden:{opacity: 0, y: 75},
                    visible:{opacity: 1, y: 0},
                }}
                initial = "hidden"
                animate= {mainControl}
                transition={{duration: 0.75, delay:0.35}}
            >{children}</motion.div>
        </div>
    );   
};