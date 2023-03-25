import { StaticImageData } from 'next/image';
import styles from './Item.module.scss';
import {useRef, useState, useEffect} from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion';
import { childAnim } from '@/helpers/animObjects';

const Item = ({
    title,
    text,
    image
}: {
    title?: string,
    text?: string,
    image: StaticImageData
}) => {
    const [isActive, setIsActive] = useState<boolean>(false)
    const [height, setHeight] = useState<number>(22)
    const textRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if(textRef?.current) {
            if(isActive) {
                setHeight(textRef?.current?.scrollHeight)
            } else {
                setHeight(22)
            }
        }
    }, [isActive, textRef])

    return (
        <motion.div variants={childAnim('bottom')} className={`${styles.wrapper} ${isActive ? styles.active : ''}`} onMouseOver={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}>
            <div className={styles.mask}></div>
            <div className={styles.img}>
                <Image src={image} alt=""/>
            </div>
            <div className={styles.descr}>
                <div className={styles.head}>{title}</div>
                <div style={{height}} className={styles.text} ref={textRef}>
                    {text}
                </div>
            </div>
        </motion.div>
    )
}

export default Item;