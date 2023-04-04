import styles from './Nav.module.scss';
import Link from 'next/link';
import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from 'react-icons/ai'

const Nav = () => {

    return (
        <div className={styles.wrapper}>
            <Link href={'/'} className={`${styles.item} ${styles.prev}`}>
                <div className={styles.icon}><AiOutlineDoubleLeft/></div>
                <div className={styles.label}>предыдущая страница</div>
                <div className={styles.title}>Полезные свойства бани</div>
            </Link>
            <Link href={'/'} className={`${styles.item} ${styles.next}`}>
                <div className={styles.icon}><AiOutlineDoubleRight/></div>
                <div className={styles.label}>следующая страница</div>
                <div className={styles.title}>Советы по выбору композитного бассейна</div>
            </Link>
        </div>
    )
}


export default Nav;