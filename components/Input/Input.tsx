import styles from './Input.module.scss';
import {FC} from 'react';
import { inputPropsTypes } from './types';

const Input:FC<inputPropsTypes> = (props) => {

    const {error} = props;


    return (
        <div className={`${styles.wrapper} ${error ? styles.error : ''}`}>
            <input  
                {...props}
                className={styles.input}
                />
        </div>
    )
}

export default Input;