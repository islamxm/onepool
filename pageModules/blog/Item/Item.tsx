import styles from './Item.module.scss';
import Image, { StaticImageData } from 'next/image';
import logo from '@/public/assets/logo-main.svg';
import Button from '@/components/Button/Button';
import {FC} from 'react';
import Badge from '@/components/Badge/Badge';
import Router from 'next/router';
import switchBlogTag from '@/helpers/switchBlogTag';
import { values } from '@/data/blogdata';

const Item:FC<{
    title?: string,
    descr?: React.ReactNode,
    date?: string,
    id: number,
    image?: StaticImageData | string,
    tag: values
}> = ({
    title,
    descr,
    date,
    id,
    image,
    tag
}) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.descr}>
                    {descr}
                </div>
                <div className={styles.action}>
                    {/* <div className={styles.date}>12 марта 2023</div> */}
                    <div className={styles.btn}><Button onClick={() => Router.push(`/blog/${id}`)} uppercase text='побробнее' variant={'fill'}/></div>
                </div>
            </div>
            <div className={`${styles.img}`}>
                <div className={`${styles.img_el} ${styles.none}`}>
                    <Image src={logo} alt=''/>
                </div>
                <div className={styles.kw}>
                    <div className={styles.kw_item}><Badge label={switchBlogTag(tag).label} bgColor={switchBlogTag(tag).bgColor}/></div>
                </div>
            </div>
        </div>
    )
}

export default Item;