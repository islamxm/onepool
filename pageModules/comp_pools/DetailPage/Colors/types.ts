import { StaticImageData } from "next/image"

export type colorPropsTypes = {
    list?: colorItemTypes[],
    ex?: React.ReactNode
}

export type colorItemTypes = {
    image: StaticImageData,
    label?: string
}