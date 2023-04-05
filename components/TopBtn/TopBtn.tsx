import styles from './TopBtn.module.scss';
import { useEffect, useState } from 'react';

const TopBtn = () => {
    const [active, setActive] = useState(false)

    const checkScroll = () => {
        if(document.documentElement.scrollTop > 10) {
            setActive(true) 
        } else {
            setActive(false)
        }
    }

    useEffect(() => {
        checkScroll();
        document.addEventListener('scroll', checkScroll)
        return () => {
            document.removeEventListener('scroll', checkScroll)
        }
    })


    return (
        <button onClick={() => document.documentElement.scrollTo(0,0)} className={`${styles.wrapper} ${active ? styles.active : ''}`}></button>
    )
}

export default TopBtn;