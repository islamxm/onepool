import styles from './Mobmenu.module.scss';
import { useAppSelector } from '@/hooks/useTypesRedux';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAppDispatch } from '@/hooks/useTypesRedux';
import {useEffect} from 'react';
import { toggleMenu } from '@/store/actions';

const Mobmenu = () => {
    const {isMenuOpen} = useAppSelector(s => s);
    const dispatch = useAppDispatch()
  const {pathname} = useRouter()

  useEffect(() => {
    dispatch(toggleMenu(false))
  }, [pathname])

    return (
        <div className={`${styles.wrapper} ${isMenuOpen ? styles.active : ''}`}>
            <ul className={styles.nav}>
                <li className={`${styles.item} ${pathname === '/' ? styles.active : ''}`}><Link href={'/'}> <span>главная</span> </Link></li>
                <li className={`${styles.item} ${pathname === '/concrete_pools' ? styles.active : ''}`}><Link href={'/concrete_pools'}> <span>Бетонные Бассейны</span> </Link></li>
                <li className={`${styles.item} ${pathname === '/iron_pools' ? styles.active : ''}`}><Link href={'/iron_pools'}> <span>Железные Бассейны</span> </Link></li>
                <li className={`${styles.item} ${pathname?.includes('/comp_pools') ? styles.active : ''}`}><Link href={'/comp_pools'}> <span>Композитные Бассейны</span> </Link></li>
                <li className={`${styles.item} ${pathname === '/spa' ? styles.active : ''}`}><Link href={'/spa'}> <span>Спа</span> </Link></li>
                <li className={`${styles.item} ${pathname === '/bath' ? styles.active : ''}`}><Link href={'/bath'}> <span>Бани и сауны</span> </Link></li>
                <li className={`${styles.item} ${pathname === '/works' ? styles.active : ''}`}><Link href={'/works'}> <span>наши работы</span> </Link></li>
                <li className={`${styles.item} ${pathname === '/servs' ? styles.active : ''}`}><Link href={'/servs'}> <span>Услуги</span> </Link></li>
                <li className={`${styles.item} ${pathname === '/contacts' ? styles.active : ''}`}><Link href={'/contacts'}> <span>Контакты</span> </Link></li>
            </ul>
            <div className={styles.action}>
                <div className={styles.item}><a href="">г. Сочи, ул. Горького, 87</a></div>
                <div className={styles.item}><a href="tel:+78007009038">+7 (800) 700-90-38</a></div>
                {/* <div className={styles.item}></div> */}
            </div>
        </div>
    )
}


export default Mobmenu;