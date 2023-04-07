import styles from './Main.module.scss';
import BlockHead from '@/components/BlockHead/BlockHead';
import Container from '@/components/Container/Container';



const Main = () => {

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.head}>
                    <BlockHead
                        title='Контакты и адреса'
                        />
                </div>
                <div className={styles.body}>
                    <div className={`${styles.part} ${styles.main}`}>
                        <div className={styles.top}>
                            <div className={styles.phone}>
                                <a href="tel:">+7 (800) 700-90-38</a>
                                <span>СОЧИ</span>
                            </div>
                            <div className={styles.phone}>
                                <a href="tel:">+7 (495) 970-20-26</a>
                                <span>МОСКВА</span>
                            </div>
                            <div className={styles.tm}>С 10:00 - 20:00 без выходных</div>
                        </div>
                        <div className={styles.bottom}>
                            <a className={styles.mail} href="mailto:">vashapochta@gmail.com</a>
                        </div>
                    </div>  
                    <div className={`${styles.part} ${styles.ex}`}>
                        <span>Краснодарский край, г. Сочи, ул. Горького, 87</span>
                        <span>{'Московская область, Красногорский район, с. Ильинское, ул. Ленина, 30, "Ильинский дворик"'}</span>
                    </div>
                </div>
                <div className={styles.map}>
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab603843305da7e26e9e6f4e56f097966e582d504821dcef3791b5dba675bbb42&amp;source=constructor" width="885" height="424" frameBorder="0"></iframe>
                </div>
            </Container>
        </div>
    )
}

export default Main;