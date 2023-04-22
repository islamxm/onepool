import { animate } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
const _ = require('lodash');
import { useInView } from "framer-motion";

const AnimatedNumbers = ({ from, to }: {from: number, to:number}) => {
    const ref = useRef<HTMLParagraphElement>(null)
    const inView = useInView(ref)
  const [val, setVal] = useState<number>(0)
    const [end, setEnd] = useState(false)

    useEffect(() => {
        let controls: any;
        if(inView && !end) {
            controls = animate(from, to, {
                onComplete: () => {
                    setEnd(true)
                },
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