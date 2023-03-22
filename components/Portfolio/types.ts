import { StaticImageData } from "next/image"

export type portPropsTypes = {
    list?: portItemPropsTypes[],
    head?: string
}


export type portItemPropsTypes = {
    side: portItemSide,
    head?: string,
    descr?: React.ReactNode,
    images: StaticImageData[]
}


export type portItemSide = 'left' | 'right'