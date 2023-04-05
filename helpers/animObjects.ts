import { Variants } from "framer-motion"

export const parentAnim: Variants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            delayChildren: .5,
            staggerChildren: .15,
        }
    },
}

export const animWhileInView = {
    initial: "hidden",
    whileInView: 'visible',
    viewport: {
        once: true
    }
}



export const childAnim = (type: directionTypes) => {
    switch(type) {
        case 'bottom':
            return {
                hidden: { y: '100%', opacity: 1 },
                visible: {
                    y: '0',
                    opacity: 1,
                    transition: {
                        //cubic-bezier(.26,.12,.25,.99)
                        ease: [.26,.12,.25,.99],
                        duration: .5,
                        // type: 'tween'
                    }
                }
            }
        case 'top':
            return {
                hidden: { y: '-100%', opacity: .7 },
                    visible: {
                        y: '0',
                        opacity: 1,
                        transition: {
                            //cubic-bezier(.26,.12,.25,.99)
                            ease: [.26,.12,.25,.99],
                            duration: .5,
                            // type: 'tween'
                        }
                    }
            }
        case 'left':
            return {
                hidden: { x: '-100%', opacity: .7 },
                    visible: {
                        x: '0',
                        opacity: 1,
                        transition: {
                            //cubic-bezier(.26,.12,.25,.99)
                            ease: [.26,.12,.25,.99],
                            duration: .5,
                            // type: 'tween'
                        }
                    }
            }
        case 'right':
            return {
                hidden: { x: '100%', opacity: .7 },
                    visible: {
                        x: '0',
                        opacity: 1,
                        transition: {
                            //cubic-bezier(.26,.12,.25,.99)
                            ease: [.26,.12,.25,.99],
                            duration: .5,
                            // type: 'tween'
                        }
                    }
            }
    }
    
}

// export const stepLineAnim = (type: directionTypes) => {
//     switch(type) {
//         case 'bottom':
//             return {
//                 hidden: { height: 0},
//                 visible: {
//                     height: 170,
//                     transition: {
//                         //cubic-bezier(.26,.12,.25,.99)
//                         ease: [.26,.12,.25,.99],
//                         duration: 1,
//                     }
//                 }
//             }
//     }
// }

export const stepLineAnim = {
    hidden: { height: 0},
    visible: {
        height: 170,
        transition: {
            //cubic-bezier(.26,.12,.25,.99)
            ease: [.26,.12,.25,.99],
            duration: .5,
        }
    }
}



export type directionTypes = 'left' | 'right' | 'bottom' | 'top' //ОТКУДА начинается аанимация