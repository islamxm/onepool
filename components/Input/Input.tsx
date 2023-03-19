import styles from './Input.module.scss';
import {FC} from 'react';
import { inputPropsTypes } from './types';

const Input:FC<inputPropsTypes> = (props) => {

    const {error, variant = 'light'} = props;

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
        <div className={`${styles.wrapper} ${error ? styles.error : ''} ${switchVariant(variant)}`}>
            <input  
                {...props}
                className={styles.input}
                />
        </div>
    )
}

export default Input;