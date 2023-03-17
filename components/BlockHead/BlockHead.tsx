import styles from './BlockHead.module.scss';
import { blockHeadPropsTypes } from './types';
import {FC} from 'react';

const BlockHead:FC<blockHeadPropsTypes> = ({
    title,
    isDark
}) => {

    return (
        <h2 className={`${styles.title} ${isDark ? styles.dark : ''}`}>
            {title}
        </h2>
    )
}

export default BlockHead;