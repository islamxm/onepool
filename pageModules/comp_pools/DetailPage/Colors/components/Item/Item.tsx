import styles from './Item.module.scss';
import {FC} from 'react';
import { colorItemTypes } from '../../types';
import Image from 'next/image';

const Item:FC<colorItemTypes> = ({
    image,
    label
}) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.img}>
                <Image src={image} alt=""/>
            </div>
            <div className={styles.name}>{label}</div>
        </div>
    )
}

export default Item;