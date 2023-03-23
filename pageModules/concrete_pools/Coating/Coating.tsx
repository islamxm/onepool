import styles from './Coating.module.scss';
import Container from '@/components/Container/Container';
import BlockHead from '@/components/BlockHead/BlockHead';

const Coating = () => {

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <div className={styles.head}>
                        <BlockHead title='Покрытие и обустройство' isDark/>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.item}>
                            
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Coating;