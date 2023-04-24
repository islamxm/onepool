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
                            <li className={styles.item}><Link href={'/spa'}>СПА</Link></li>
                            <li className={styles.item}><Link href={'/servs'}>Услуги</Link></li>
                            <li className={styles.item}><Link href={'/concrete_pools'}>Бассейны</Link></li>
                            <li className={styles.item}><Link href={'/contacts'}>Контакты</Link></li>
                            <li className={styles.item}><Link href={'/bath'}>Бани и сауны</Link></li>
                            <li className={styles.item}><Link href={'/blog'}>Блог</Link></li>
                        </ul>
                        <div className={styles.cn}>
                            <div className={styles.adr}>
                            Краснодарский край, г.Сочи <br/> Ленина, 298Б помещение 48Н, офис 4
                            </div>
                            <div className={styles.tel}>
                                <Link href={'tel:+78002220859'}>+7 (800) 222-08-59</Link>
                            </div>
                        </div>
                        <div className={styles.logo}>
                            <div className={styles.logo_main}>
                                <Image src={logo} alt='Pool form'/>
                            </div>
                            <div className={styles.logo_ex}>
                                <a href='https://www.manawell.ru/' target='_blank' className={styles.logo_manawell}>
                                    <Image src={manawell} alt='Manawell'/>
                                </a>
                                <a href='https://1pools.ru/about/'  target='_blank' className={styles.logo_onepool}>
                                    <Image src={onepool} alt='Onepool'/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.ex}>
                    POOLFORM 2023. Все права защищены.
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer;