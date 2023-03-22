import styles from './Text.module.scss';
import {FC} from 'react';
import { textPropsTypes } from './types';

const Text:FC<textPropsTypes> = (props) => {
    const {height, resize, variant = 'light'} = props;

    const switchVariant = (variant = 'light') => {
        switch(variant) {
            case 'light':
                return styles.light
            case 'dark':
                return styles.dark
            default:
                return styles.light
        }
    }

    return (
        <div className={`${styles.wrapper} ${resize ? styles.resize : ''} ${switchVariant(variant)}`} >
            <textarea
                className={styles.text}
                {...props}
                style={{minHeight: height}}
                ></textarea>
        </div>
    )
}

export default Text;