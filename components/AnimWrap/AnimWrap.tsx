import styles from './AnimWrap.module.scss';
import {FC} from 'react';
import { animWrapPropsTypes } from './types';
import { childAnim } from '@/helpers/animObjects';
import {motion} from 'framer-motion'; 
const AnimWrap:FC<animWrapPropsTypes> = ({
    children,
    className
}) => {

    return (
        <div className={`${styles.wrapper} ${className}`}>
            <motion.div 
                variants={childAnim}
                className={styles.main}>
                {children}
            </motion.div>
            <div className={styles.wall}></div>
        </div>
    )
}

export default AnimWrap;