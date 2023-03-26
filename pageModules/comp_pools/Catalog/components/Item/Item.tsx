import styles from './Item.module.scss';
import { catalogItemTypes } from '../../types';
import {FC} from 'react';
import Image from 'next/image';
import Button from '@/components/Button/Button';

const Item:FC<catalogItemTypes> = ({
    image,
    name,
    prices,
    descr
}) => {
    const {oldPrice, price} = prices || {};
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.image}>
                <Image width={170} height={150} placeholder={'blur'} src={image} alt=""/>
            </div>
            <div className={styles.body}>
                <div className={styles.name}>{name}</div>
                <div className={styles.descr}>
                    {descr}
                </div>
                <div className={styles.prices}>
                    <div className={styles.new}>{price} ₽</div>
                    <div className={styles.old}>{oldPrice} ₽</div>
                </div>
                <div className={styles.action}>
                    <Button
                        text='купить'
                        variant='fill'
                        />
                </div>
            </div>
        </div>
    )
}


export default Item;