import { StaticImageData } from "next/image"

export type servsPropsTypes = {
    list?: servItemTypes[],
    title?: string,
    sub?:string,
    isHomePage?: boolean
}

export type servItemTypes = {
    title?: string,
    images?: StaticImageData[],
    descr?: React.ReactNode,
    side: 'left' | 'right'
}