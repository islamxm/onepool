import { StaticImageData } from "next/image"

export type whyPropsTypes = {
    title?: string,
    haveLink?: boolean,
    list: whyItemPropsTypes[],

}

export type whyItemPropsTypes = {
    icon?: StaticImageData,
    head?: string,
    text?: string
}