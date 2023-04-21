import styles from './Main.module.scss';
import BlockHead from '@/components/BlockHead/BlockHead';
import Container from '@/components/Container/Container';
import {useState, useEffect} from 'react';


const Main = () => {

    const [active, setActive] = useState<1 | 2>(1)




    const switchMap = (id: 1 | 2) => {
        switch(id) {
            case 1:
                return (
                    <div className={styles.map}>
                        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A9ee0b499cc53fd9ea44989ab09e2a85c3455980f00d4030600064ee3b90242d2&amp;source=constructor" width="800" height="400" frameBorder="0"></iframe>
                    </div>
                )
            case 2:
                return (
                    <div className={styles.map}>
                            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A0871f0a0b477a7b342986e0e09a4a345af04818b762dee78723dd2f1cee34b7d&amp;source=constructor" width="868" height="400" frameBorder="0"></iframe>
                        </div>
                )
        }
    }

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.head}>
                    <BlockHead
                        title='Контакты и адреса'
                        />
                </div>
                <div className={styles.body}>
                    <div className={styles.part} onClick={() => setActive(1)}>
                        <div className={styles.tel}>
                            <a href="tel:+78002220859">+7-(800)-222-08-59</a>
                            <div className={styles.city}>СОЧИ</div>
                        </div>
                        <div className={styles.tm}>С 10:00 - 20:00 без выходных</div>
                        <div className={styles.adress}>
                            Краснодарский край, г.Сочи, Ленина, 298Б помещение 48Н, офис 4
                        </div>
                        <div className={styles.mail}>
                            <a href="mailto:info@poolform.ru">info@poolform.ru</a>
                        </div>
                    </div>
                    <div onClick={() => setActive(2)} className={styles.part}>
                        <div className={styles.tel}>
                            <a href="tel:+78002220859">+7-(495)-970-20-26</a>
                            <div className={styles.city}>МОСКВА</div>
                        </div>
                        <div className={styles.tm}>С 10:00 - 20:00 без выходных</div>
                        <div className={styles.adress}>
                            Московская область, Красногорский район, с. Ильинское, ул. Ленина, 30
                        </div>
                        <div className={styles.mail}>
                            <a href="mailto:info@poolform.ru">info@poolform.ru</a>
                        </div>
                    </div>
                </div>
                {
                    switchMap(active)
                }
                
            </Container>
        </div>
    )
}

export default Main;