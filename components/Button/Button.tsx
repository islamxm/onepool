import styles from './Button.module.scss';
import { buttonPropsTypes, buttonVariants } from './types';
import {FC} from 'react';
import {LoadingOutlined} from '@ant-design/icons';

const Button:FC<buttonPropsTypes> = (props) => {

    const {
        text,
        variant = 'bordered',
        uppercase,
        load
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
            className={`${styles.button} ${switchVariant(variant)} ${uppercase ? styles.upper : ''} ${load ? styles.load : ''}`}>
            {
                load ? (
                    <div className={styles.load}><LoadingOutlined/></div>
                ) : null
            }
            <span className={styles.text}>{text}</span>
        </button>
    )
}

export default Button;