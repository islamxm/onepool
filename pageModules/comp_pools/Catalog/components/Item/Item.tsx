import styles from './Item.module.scss';
import { catalogItemTypes } from '../../types';
import {FC, useState} from 'react';
import Image from 'next/image';
import Button from '@/components/Button/Button';
import Link from 'next/link';
import Router from 'next/router';
import BuyModal from '@/components/BuyModal/BuyModal';

const Item:FC<catalogItemTypes> = ({
    image,
    name,
    prices,
    descr,
    link
}) => {
    const {oldPrice, price} = prices || {};
    const [buy, setBuy] = useState(false)
    
    return (
        <div className={styles.wrapper}>
            <BuyModal
                image={image}
                price={prices?.price}
                open={buy}
                name={name}
                onCancel={() => setBuy(false)}
                width={600}
                />
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
                        // onClick={() => Router.push(link)}
                        text='купить'
                        variant='fill'
                        onClick={() => setBuy(true)}
                        />
                </div>
            </div>
        </div>
    )
}


export default Item;