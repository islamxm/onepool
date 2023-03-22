import { StaticImageData } from "next/image"

export type palPropsTypes = {
    list?: palItemPropsTypes[],
    title?: string,
    subtitle?: string,
    isHasAction: boolean
}

export type palItemPropsTypes = {
    image: StaticImageData,
    name?: string
}