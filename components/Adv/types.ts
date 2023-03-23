import { StaticImageData } from "next/image"

export type advPropsTypes = {
    title?: string,
    list: advItemTypes[],
    bg: StaticImageData
}

export type advItemTypes = {
    title?: string,
    text: React.ReactNode,
    image: StaticImageData,
    icon: StaticImageData,
    side?: 'left' | 'right'
}