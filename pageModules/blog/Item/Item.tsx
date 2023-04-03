import styles from './Item.module.scss';
import Image, { StaticImageData } from 'next/image';
import logo from '@/public/assets/logo-main.svg';
import Button from '@/components/Button/Button';
import {FC} from 'react';
import Badge from '@/components/Badge/Badge';
import Router from 'next/router';

const Item:FC<{
    title?: string,
    descr?: string,
    date?: string,
    id?: string,
    image?: StaticImageData | string
}> = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <h3 className={styles.title}>Бетонный или железный бассейн? какой выбрать?</h3>
                <div className={styles.descr}>
                    <p>
                    Многие домовладельцы желают обустроить бассейн на собственном участке. Однако сделать выбор в пользу...
                    </p>
                </div>
                <div className={styles.action}>
                    <div className={styles.date}>12 марта 2023</div>
                    <div className={styles.btn}><Button onClick={() => Router.push('/blog/1')} uppercase text='побробнее' variant={'fill'}/></div>
                </div>
            </div>
            <div className={`${styles.img}`}>
                <div className={`${styles.img_el} ${styles.none}`}>
                    <Image src={logo} alt=''/>
                </div>
                <div className={styles.kw}>
                    <div className={styles.kw_item}><Badge label='КОМПОЗИТНЫЕ бассейны'/></div>
                    <div className={styles.kw_item}><Badge bgColor='#1E8CF1' label='ЖЕЛЕЗНЫЕ бассейны'/></div>
                    <div className={styles.kw_item}><Badge bgColor='#288FAF' label='бетонные бассейны'/></div>
                    <div className={styles.kw_item}><Badge bgColor='#36C591' label='СПА'/></div>
                    <div className={styles.kw_item}><Badge bgColor='#ED8B6D' label='БАНИ'/></div>
                    <div className={styles.kw_item}><Badge bgColor='#DFB072' label='САУНЫ'/></div>
                </div>
            </div>
        </div>
    )
}

export default Item;