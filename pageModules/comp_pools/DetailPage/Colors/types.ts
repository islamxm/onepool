import { StaticImageData } from "next/image"

export type colorPropsTypes = {
    list?: colorItemTypes[]
}

export type colorItemTypes = {
    image: StaticImageData,
    label?: string
}