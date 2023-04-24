import Button from '../Button/Button';
import styles from './Header.module.scss';
import Container from '../Container/Container';
import Link from 'next/link';
import {BsTelephone, BsGeoAlt} from 'react-icons/bs';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Dropdown } from 'antd';
import { useAppDispatch, useAppSelector } from '@/hooks/useTypesRedux';
import { toggleMenu } from '@/store/actions';
import {useScrollDirection} from "use-scroll-direction";
import { useRouter } from 'next/router';
import logo from '@/public/assets/logo-main.svg';
import Image from 'next/image';
import FbModal from '../FbModal/FbModal';

const Header = () => {
    const [fb, setFb] = useState(false)
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [scrollDown, setScrollDown] = useState(false)
    const {isMenuOpen} = useAppSelector(s => s)
    const dispatch = useAppDispatch();
    const {pathname} = useRouter()
    const topRef = useRef<HTMLDivElement>(null)

    const [topHeight, setTopHeight] = useState(0);

    const {
        scrollDirection,
        isScrolling,
        isScrollingUp,
        isScrollingDown,
        isScrollingLeft,
        isScrollingRight
    } = useScrollDirection();


    const checkScroll = (e: any) => {
        if(document.documentElement.scrollTop > 10) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }

    const topFunc = useCallback(() => {
        if(window.innerWidth > 768) {
            if(topRef?.current) {
                if(scrolled) {
                    setTopHeight(0)
                } else {
                    setTopHeight(topRef?.current?.scrollHeight)
    
                }
            }
        } else {
            if(topRef?.current) {
                setTopHeight(topRef?.current?.scrollHeight)
            }
        }
    }, [topRef, scrolled])

    useEffect(() => {
        topFunc()
        window.addEventListener('resize', topFunc)

        return () => {
            window.removeEventListener('resize', topFunc)
        }
    }, [topRef, scrolled])

    useEffect(() => {
        if(isScrollingDown) {
            setScrollDown(true)
        }
        if(isScrollingUp) {
            setScrollDown(false)
        }
    }, [isScrollingDown, isScrollingUp])
  

    useEffect(() => {
        document.addEventListener('scroll', checkScroll)
     
        return () => {
            document.removeEventListener('scroll', checkScroll)
  
        }
    }, [])

    return (
        <header className={`${styles.wrapper} ${scrolled ? styles.active : ''} ${scrollDown ? styles.hidden : ''}`}> 
            <FbModal open={fb} onCancel={() => setFb(false)}/>
            <Container>
                <div className={styles.inner}>
                    <div ref={topRef} style={{height:topHeight}} className={styles.top}>
                        <div className={styles.top_in}>
                            <Link href={'/'} className={styles.logo}>
                                <Image src={logo} alt='Pool form'/>
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
                                    <a href='#' className={styles.link}>Сочи, Ленина, 298Б<br/> помещение 48Н, офис 4</a>
                                </div>
                            </div>
                            <div className={styles.info}>
                                <div className={styles.icon}>
                                    <BsTelephone/>
                                </div>
                                <div className={styles.body}>
                                    <div className={styles.name}>Телефон</div>
                                    <a href='tel:+78002220859' className={styles.link}>+7 (800) 222-08-59</a>
                                </div>
                            </div>
                            <div className={styles.action}>
                                <Button
                                    onClick={() => setFb(true)}
                                    text='Обратный звонок'
                                    />
                            </div>
                            <button 
                                onClick={() => dispatch(toggleMenu(!isMenuOpen))}
                                className={`${styles.burger} ${isMenuOpen ? styles.active : ''}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            <div className={styles.mobtel}>
                                <a href="tel:+78002220859" target='_blank'>
                                    +7 (800) 222-08-59
                                    <span className={styles.icon}>
                                    <BsTelephone/>
                                    </span>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div className={styles.main}>
                        <ul className={styles.nav}>
                            <li className={`${styles.nav_item} ${pathname === '/' ? styles.active : ''}`}>
                                <Link href={'/'} className={styles.nav_link}>главная</Link>
                            </li>
                            <li className={styles.cr}></li>
                            <li className={`${styles.nav_item} ${pathname === '/concrete_pools' || pathname === '/iron_pools' || pathname === '/comp_pools' ? styles.active : ''}`}>
                                <Dropdown
                                    trigger={['hover']}
                                    placement={'bottomCenter'}
                                    overlay={<div className={'header-drop'}>
                                        <div className={'header-drop__item'}><Link href={'/concrete_pools'}>Бетонные Бассейны </Link></div>
                                        <div className={'header-drop__item'}><Link href={'/iron_pools'}>Стальные Бассейны</Link></div>
                                        <div className={'header-drop__item'}><Link href={'/comp_pools'}>Композитные Бассейны</Link></div>
                                    </div>}
                                    >
                                    <Link href={'/concrete_pools'} className={styles.nav_link}>Бассейны</Link>
                                </Dropdown>
                                
                            </li>
                            <li className={styles.cr}></li>
                            <li className={`${styles.nav_item} ${pathname === '/spa' ? styles.active : ''}`}>
                                <Link href={'/spa'} className={styles.nav_link}>спа комплексы</Link>
                            </li>
                            <li className={styles.cr}></li>
                            <li className={`${styles.nav_item} ${pathname === '/bath' ? styles.active : ''}`}>
                                <Link href={'/bath'} className={styles.nav_link}>бани и сауны</Link>
                            </li>
                            <li className={styles.cr}></li>
                            <li className={`${styles.nav_item} ${pathname === '/works' ? styles.active : ''}`}>
                                <Link href={'/works'} className={styles.nav_link}>наши работы</Link>
                            </li>
                            <li className={styles.cr}></li>
                            <li className={`${styles.nav_item} ${pathname === '/servs' ? styles.active : ''}`}>
                                <Link href={'/servs'} className={styles.nav_link}>услуги</Link>
                            </li>
                            <li className={styles.cr}></li>
                            <li className={`${styles.nav_item} ${pathname === '/contacts' ? styles.active : ''}`}>
                                <Link href={'/contacts'} className={styles.nav_link}>Контакты</Link>
                            </li>
                            <li className={styles.cr}></li>
                            <li className={`${styles.nav_item} ${pathname === '/blog' || pathname.includes('/blog') ? styles.active : ''}`}>
                                <Link href={'/blog'} className={styles.nav_link}>БЛОГ</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
            
        </header>
    )
}

export default Header;