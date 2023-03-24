import { animate } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
const _ = require('lodash');
import { useInView } from "framer-motion";

const AnimatedNumbers = ({ from, to }: {from: number, to:number}) => {
    const ref = useRef<HTMLParagraphElement>(null)
    const inView = useInView(ref)
  const [val, setVal] = useState<number>(0)

    useEffect(() => {
        let controls: any;
        if(inView) {
            controls = animate(from, to, {
                duration: 1,
                onUpdate: (value) => {
                    setVal(_.round(value))
                }
            })
    
        }   
        
        return () => controls?.stop();


    }, [from,to, inView])


  return <p ref={ref}>{val}</p>;
}

export default AnimatedNumbers;