import styles from './Container.module.scss';


const Container = ({children}: {children: React.ReactNode}) => {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}

export default Container;