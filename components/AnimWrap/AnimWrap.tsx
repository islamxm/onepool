import styles from './AnimWrap.module.scss';
import {FC} from 'react';
import { animWrapPropsTypes } from './types';
import { childAnim } from '@/helpers/animObjects';
import {motion} from 'framer-motion'; 
const AnimWrap:FC<animWrapPropsTypes> = ({
    children,
    className,
    direction = 'bottom',
    
}) => {

    return (
        <div className={`${styles.wrapper} ${className}`}>
            {children}
            {/* <div className={styles.wall}></div> */}
        </div>
    )
}

export default AnimWrap;