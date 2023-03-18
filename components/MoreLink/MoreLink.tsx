import { alignTypes, moreLinkPropsTypes } from "./types";
import {FC} from 'react';
import Link from "next/link";
import styles from './MoreLink.module.scss';
import {FiChevronRight} from 'react-icons/fi';


const MoreLink:FC<moreLinkPropsTypes> = ({
    isDark,
    link,
    align = 'left'
}) => {
    
    const switchAlign = (align: alignTypes) => {
        switch(align) {
            case 'left':
                return styles.left
            case 'center' :
                return styles.center
            case 'right':
                return styles.right
            default:
                return styles.left
        }
    }


    return (
        <div className={`${styles.wrapper} ${switchAlign(align)} ${isDark ? styles.dark : ''}`}>
            <Link href={link} className={styles.link}>
                <div className={styles.label}>
                    Подробнее
                </div>
                <div className={styles.icon}>
                    <FiChevronRight/>
                </div>
            </Link>
        </div>
    )
}

export default MoreLink;