export interface buttonPropsTypes extends React.HTMLProps<HTMLButtonElement> {
    text?: string,
    variant?: buttonVariants,
    uppercase?: boolean,
    load?: boolean
}   


export type buttonVariants = 'bordered' | 'fill'