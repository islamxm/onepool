import { StaticImageData } from "next/image"

export type mainTypes = {
    images?: StaticImageData[],
    name?: string,
    prices?: {
        base?: string | number,
        standart?: string | number,
        premium?: string | number
    },
    descr?: React.ReactNode
}