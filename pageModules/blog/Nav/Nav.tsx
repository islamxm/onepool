import styles from './Nav.module.scss';
import Link from 'next/link';
import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from 'react-icons/ai'

const Nav = ({
    nextId,
    prevId,
    nextTitle,
    prevTitle
}: {
    nextId?: number,
    nextTitle?: string,
    prevId?: number,
    prevTitle?: string

}) => {

    return (
        <div className={styles.wrapper}>
            <Link href={`/blog/${prevId}`} className={`${styles.item} ${styles.prev} ${!prevId ? styles.disabled : ''}`}>
                <div className={styles.icon}><AiOutlineDoubleLeft/></div>
                <div className={styles.label}>предыдущая страница</div>
                <div className={styles.title}>{prevTitle}</div>
            </Link>
            <Link href={`/blog/${nextId}`} className={`${styles.item} ${styles.next} ${!nextId ? styles.disabled : ''}`}>
                <div className={styles.icon}><AiOutlineDoubleRight/></div>
                <div className={styles.label}>следующая страница</div>
                <div className={styles.title}>{nextTitle}</div>
            </Link>
        </div>
    )
}


export default Nav;