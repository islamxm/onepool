import Button from '../Button/Button';
import styles from './Header.module.scss';
import Container from '../Container/Container';
import Link from 'next/link';
import {BsTelephone, BsGeoAlt} from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { Dropdown } from 'antd';


const Header = () => {
    const [scrolled, setScrolled] = useState<boolean>(false);


    const checkScroll = () => {
        if(document.documentElement.scrollTop > 10) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', checkScroll)

        return () => {
            document.removeEventListener('scroll', checkScroll)
        }
    }, [])

    return (
        <header className={`${styles.wrapper} ${scrolled ? styles.active : ''}`}> 
            <Container>
                <div className={styles.inner}>
                    <div className={styles.top}>
                        <Link href={'/'} className={styles.logo}>
                            
                        </Link>
                        <div className={styles.label}>
                            Собственное производство <br/> 
                            бассейнов с 2001 года
                        </div>
                        <div className={styles.info}>
                            <div className={styles.icon}>
                                <BsGeoAlt/>
                            </div>
                            <div className={styles.body}>
                                <div className={styles.name}>Адрес</div>
                                <a href='#' className={styles.link}>г. Сочи, ул. Горького, 87</a>
                            </div>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.icon}>
                                <BsTelephone/>
                            </div>
                            <div className={styles.body}>
                                <div className={styles.name}>Телефон</div>
                                <a href='#' className={styles.link}>+7 (800) 700-90-38</a>
                            </div>
                        </div>
                        <div className={styles.action}>
                            <Button
                                text='Обратный звонок'
                                />
                        </div>
                    </div>
                    <div className={styles.main}>
                        <ul className={styles.nav}>
                            <li className={styles.nav_item}>
                                <Link href={'/'} className={styles.nav_link}>главная</Link>
                            </li>
                            <li className={styles.nav_item}>
                                <Dropdown
                                    trigger={['hover']}
                                    placement={'bottomCenter'}
                                    overlay={<div className={'header-drop'}>
                                        <div className={'header-drop__item'}><Link href={'/concrete_pools'}>Бетонные Бассейны </Link></div>
                                        <div className={'header-drop__item'}><Link href={'/iron_pools'}> Железные Бассейны</Link></div>
                                        <div className={'header-drop__item'}><Link href={'/concrete_pools'}>Композитные Бассейны</Link></div>
                                    </div>}
                                    >
                                    <Link href={'/concrete_pools'} className={styles.nav_link}>Бассейны</Link>
                                </Dropdown>
                                
                            </li>
                            <li className={styles.nav_item}>
                                <Link href={'/spa'} className={styles.nav_link}>спа</Link>
                            </li>
                            <li className={styles.nav_item}>
                                <Link href={'/bath'} className={styles.nav_link}>бани и сауны</Link>
                            </li>
                            <li className={styles.nav_item}>
                                <Link href={'/works'} className={styles.nav_link}>наши работы</Link>
                            </li>
                            <li className={styles.nav_item}>
                                <Link href={'/servs'} className={styles.nav_link}>услуги</Link>
                            </li>
                            <li className={styles.nav_item}>
                                <Link href={'/contacts'} className={styles.nav_link}>Контакты</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
            
        </header>
    )
}

export default Header;