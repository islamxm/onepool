import { StaticImageData } from "next/image"

export type daysPropsTypes = {
    list?: daysItemTypes[]
}

export type daysItemTypes = {
    day?: number,
    head?: string,
    text?: string,
    image?: StaticImageData
}