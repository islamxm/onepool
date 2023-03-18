import styles from './Footer.module.scss';
import Container from '../Container/Container';
import Link from 'next/link';
import Image from 'next/image';


const Footer = () => {

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <div className={styles.main}>
                        <ul className={styles.nav}>
                            <li className={styles.item}><Link href={'/'}>Главная</Link></li>
                            <li className={styles.item}><Link href={'/'}>СПА</Link></li>
                            <li className={styles.item}><Link href={'/'}>Услуги</Link></li>
                            <li className={styles.item}><Link href={'/'}>Бассейны</Link></li>
                            <li className={styles.item}><Link href={'/'}>Контакты</Link></li>
                            <li className={styles.item}><Link href={'/'}>Бани и сауны</Link></li>
                            <li className={styles.item}><Link href={'/'}>Блог</Link></li>
                        </ul>
                        <div className={styles.cn}>
                            <div className={styles.adr}>
                            г. Сочи, ул. Горького, 87
                            </div>
                            <div className={styles.tel}>
                                <Link href={'tel:'}>+7 (800) 700-90-38</Link>
                            </div>
                        </div>
                        <Link className={styles.logo} href={'/'}>

                        </Link>
                    </div>
                    <div className={styles.ex}>
                    ONEPOOL 2023. Все права защищены.
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer;