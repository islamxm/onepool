import styles from './Item.module.scss';
import {FC} from 'react';
import { faqItemProps } from '../../types';
import {useState, useEffect, useRef} from 'react';



const Item:FC<faqItemProps> = ({
    head,
    text
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState(0);
    const bodyRef = useRef<HTMLDivElement>(null)
    

    useEffect(() => {
        if(bodyRef?.current) {
            if(isOpen) {
                setHeight(bodyRef?.current.scrollHeight)
            } else {
                setHeight(0)
            }
        }
    }, [isOpen, bodyRef])


    return (
        <div className={`${styles.wrapper} ${isOpen ? styles.active : ''}`}>
            <div className={styles.head} onClick={() => setIsOpen(s => !s)}>
                <div className={styles.label}>{head}</div>
                <div className={styles.icon}></div>
            </div>
            <div style={{height}} ref={bodyRef} className={styles.body}>
                <div className={styles.in}>
                    {text}
                    <span>Подробнее</span>
                </div>
            </div>
        </div>
    )
}

export default Item;