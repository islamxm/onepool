import styles from './Text.module.scss';
import {FC} from 'react';
import { textPropsTypes } from './types';

const Text:FC<textPropsTypes> = (props) => {
    const {height, resize} = props;

    return (
        <div className={`${styles.wrapper} ${resize ? styles.resize : ''}`} >
            <textarea
                className={styles.text}
                {...props}
                style={{minHeight: height}}
                ></textarea>
        </div>
    )
}

export default Text;