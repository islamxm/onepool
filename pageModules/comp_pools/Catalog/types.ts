import { StaticImageData } from "next/image"

export type catalogPropsTypes = {
    list: catalogItemTypes[]
}

export type catalogItemTypes = {
    image: StaticImageData,
    name?: string,
    descr?: React.ReactNode,
    prices?: {
        oldPrice?: number | string,
        price?: number | string
    }
}