export type tabsPropsTypes = {
    list?: tabItemType[]
    activeTab?: string
    onSelect: (...args: any[]) => any
}

export type tabItemType = {
    id?: string,
    label?: string,
}