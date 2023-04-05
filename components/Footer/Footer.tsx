import styles from './Footer.module.scss';
import Container from '../Container/Container';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/assets/logo.svg';
import onepool from '@/public/assets/logo-onepool.png';
import manawell from '@/public/assets/logo-manawell.png';

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
                            <div className={styles.logo_main}>
                                <Image src={logo} alt='Pool form'/>
                            </div>
                            <div className={styles.logo_ex}>
                                <div className={styles.logo_manawell}>
                                    <Image src={manawell} alt='Manawell'/>
                                </div>
                                <div className={styles.logo_onepool}>
                                    <Image src={onepool} alt='Onepool'/>
                                </div>
                            </div>
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