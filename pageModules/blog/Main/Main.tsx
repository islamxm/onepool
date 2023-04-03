import styles from './Main.module.scss';
import Container from '@/components/Container/Container';
import Badge from '@/components/Badge/Badge';

const Main = () => {

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <div className={styles.head}>
                        <div className={styles.top}>
                            <div className={styles.date}></div>
                            <div className={styles.kw}><Badge label='ЖЕЛЕЗНЫЕ бассейны'/></div>
                        </div>
                        <h2 className={styles.title}>
                            Бетонный или железный бассейн? какой выбрать?
                        </h2>
                    </div>
                </div>
            </Container>
        </div>
    )
}