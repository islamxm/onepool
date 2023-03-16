import styles from './Button.module.scss';
import { buttonPropsTypes, buttonVariants } from './types';
import {FC} from 'react';

const Button:FC<buttonPropsTypes> = (props) => {

    const {
        text,
        variant = 'bordered',
        uppercase
    } = props;


    const switchVariant = (variant: buttonVariants) => {
        switch(variant) {
            case 'bordered':
                return styles.bordered
            case 'fill':
                return styles.fill
            default:
                return styles.bordered
        }
    }


    return (
        <button 
            {...props}
            type={'button'}
            className={`${styles.button} ${switchVariant(variant)} ${uppercase ? styles.upper : ''}`}>
            <span className={styles.text}>{text}</span>
        </button>
    )
}

export default Button;