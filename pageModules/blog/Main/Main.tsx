import styles from './Main.module.scss';
import Container from '@/components/Container/Container';
import Badge from '@/components/Badge/Badge';
import Nav from '../Nav/Nav';
const Main = ({
    children
}: {
    children?: React.ReactNode
}) => {

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <div className={styles.head}>
                        <div className={styles.top}>
                            <div className={styles.date}>12 марта 2023</div>
                            <div className={styles.kw}><Badge label='ЖЕЛЕЗНЫЕ бассейны'/></div>
                        </div>
                        <h2 className={styles.title}>
                            Бетонный или железный бассейн? какой выбрать?
                        </h2>
                    </div>
                    <div className={styles.body}>
                        {children}
                    </div>
                    <Nav/>
                </div>
            </Container>
        </div>
    )
}

export default Main;