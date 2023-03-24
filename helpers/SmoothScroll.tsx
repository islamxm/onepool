import React, { useRef, FC, useState, useCallback, useLayoutEffect } from "react"
import ResizeObserver from "resize-observer-polyfill"

import {
  useTransform,
  useSpring,
  motion,
  useScroll
} from "framer-motion"

type types = {
    children?: React.ReactNode
}

const SmoothScroll:FC<types> = ({ children }) => {

  const scrollRef = useRef<HTMLDivElement>(null)

 
  const [pageHeight, setPageHeight] = useState(0)

  
  const resizePageHeight = useCallback((entries:any) => {
    for (let entry of entries) {
      setPageHeight(entry.contentRect.height)
    }
    //setPageHeight(entries[0].borderBoxSize[0].inlineSize)
    // console.log(entries[0])
  }, [])


  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(entries =>
      resizePageHeight(entries)
    )
    scrollRef?.current && resizeObserver.observe(scrollRef.current)
    return () => resizeObserver.disconnect()
  }, [scrollRef, resizePageHeight])

  const { scrollY } = useScroll() 
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight])
  const physics = { damping: 15, mass: 0.27, stiffness: 55 } 
  const spring = useSpring(transform, physics) 

  return (
    <>
      <motion.div
        ref={scrollRef}
        style={{ y: spring }} 
        className="scroll-container"
      >
        {children}
      </motion.div>
  
      <div style={{ height: pageHeight }} />
    </>
  )
}

export default SmoothScroll