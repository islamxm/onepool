import { StaticImageData } from "next/image"

export type servsPropsTypes = {
    
}

export type servItemTypes = {
    title?: string,
    images?: StaticImageData[],
    descr?: React.ReactNode,
    side: 'left' | 'right'

}