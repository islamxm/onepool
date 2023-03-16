export interface buttonPropsTypes extends React.HTMLProps<HTMLButtonElement> {
    text?: string,
    variant?: buttonVariants,
    uppercase?: boolean
}   


export type buttonVariants = 'bordered' | 'fill'