export type faqPropsTypes = {
    list?: faqItemProps[]
}  

export type faqItemProps = {
    head?: string,
    text?: React.ReactNode,
    moreText?: React.ReactNode
}