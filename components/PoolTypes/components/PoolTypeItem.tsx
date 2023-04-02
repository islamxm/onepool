import styles from './PoolTypeItem.module.scss';
import {FC} from 'react';
import { poolTypeItemType } from '../types';
import Image from 'next/image';
import { childAnim } from '@/helpers/animObjects';
import {motion} from 'framer-motion'; 

const PoolTypeItem:FC<poolTypeItemType> = ({
    image,
    title,
    text
}) => {


    return (
        <motion.div variants={childAnim('bottom')} className={styles.wrapper}>
            <div className={styles.image}>
                <Image src={image} alt=""/>
            </div>
            <div className={styles.descr}>  
                <div className={styles.title}>
                    <div className={styles.title_el}>{title}</div>
                </div>
                <div className={styles.text}>{text}</div>
            </div>
        </motion.div>
    )
}


export default PoolTypeItem;