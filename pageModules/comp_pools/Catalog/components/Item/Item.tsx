import styles from './Item.module.scss';
import { catalogItemTypes } from '../../types';
import {FC} from 'react';
import Image from 'next/image';
import Button from '@/components/Button/Button';
import Link from 'next/link';
import Router from 'next/router';


const Item:FC<catalogItemTypes> = ({
    image,
    name,
    prices,
    descr,
    link
}) => {
    const {oldPrice, price} = prices || {};
    
    return (
        <div className={styles.wrapper}>
            <Link href={link} className={styles.image}>
                <Image width={170} height={150} placeholder={'blur'} src={image} alt=""/>
            </Link>
            <div className={styles.body}>
                <Link href={link} className={styles.name}>{name}</Link>
                <div className={styles.descr}>
                    {descr}
                </div>
                <div className={styles.prices}>
                    <div className={styles.new}>{price} ₽</div>
                    <div className={styles.old}>{oldPrice} ₽</div>
                </div>
                <div className={styles.action}>
                    <Button
                        onClick={() => Router.push(link)}
                        text='купить'
                        variant='fill'
                        />
                </div>
            </div>
        </div>
    )
}


export default Item;