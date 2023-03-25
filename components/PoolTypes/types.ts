import { StaticImageData } from "next/image"

export type poolTypesPropsTypes = {
    list?: poolTypeItemType[],
    title?: string
}

export type poolTypeItemType = {
    image: StaticImageData,
    title?: string,
    text?: React.ReactNode
}