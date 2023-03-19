export interface inputPropsTypes extends React.HTMLProps<HTMLInputElement> {
    error?: string | boolean,
    variant?: 'light' | 'dark'
}