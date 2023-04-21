import styles from './Item.module.scss';
import {FC} from 'react';
import { faqItemProps } from '../../types';
import {useState, useEffect, useRef} from 'react';
import MoreModal from '../MoreModal/MoreModal';


const Item:FC<faqItemProps> = ({
    head,
    text,
    moreText
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState(0);
    const bodyRef = useRef<HTMLDivElement>(null)
    const [more, setMore] = useState(false)

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
            <MoreModal
                open={more}
                onCancel={() => setMore(false)}
                text={moreText}
                />
            <div className={styles.head} onClick={() => setIsOpen(s => !s)}>
                <div className={styles.label}>{head}</div>
                <div className={styles.icon}></div>
            </div>
            <div style={{height}} ref={bodyRef} className={styles.body}>
                <div className={styles.in}>
                    {text}
                    <span onClick={() => setMore(true)}>Подробнее</span>
                </div>
            </div>
        </div>
    )
}

export default Item;