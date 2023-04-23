export type tabsPropsTypes = {
    list?: tabItemType[]
    activeTab?: string,
    isLight?: boolean,
    onSelect: (...args: any[]) => any
}

export type tabItemType = {
    id?: string,
    label?: string,
}