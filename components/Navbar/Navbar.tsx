import styles from './Navbar.module.scss';
import Image from 'next/image';
import img1 from '@/public/assets/nav-1.svg'
import img2 from '@/public/assets/nav-2.svg'
import img3 from '@/public/assets/nav-3.svg'
import img4 from '@/public/assets/nav-4.svg'
import {useEffect, useState} from 'react';
import FbModal from '../FbModal/FbModal';

const Navbar = () => {
    const [fb, setFb] = useState(false)



    return (
        <div className={styles.wrapper}>
            <FbModal
                open={fb}
                onCancel={() => setFb(false)}
                />
            <div className={styles.in}>
                <div onClick={() => setFb(true)} className={styles.item}>
                    <div className={styles.icon}>
                        <Image src={img1} alt=''/>
                    </div>
                    <div className={styles.label}>Заявка</div>
                </div>
                <a href='https://t.me/POOLFORM_BOT' target='_blank' className={styles.item}>
                    <div className={styles.icon}>
                        <Image src={img2} alt=''/>
                    </div>
                    <div className={styles.label}>Telegram</div>
                </a>
                <a href='https://wa.me/+79284044995' target='_blank' className={styles.item}>
                    <div className={styles.icon}>
                        <Image src={img3} alt=''/>
                    </div>
                    <div className={styles.label}>WhatsApp</div>
                </a>
                <div onClick={() => document.documentElement.scrollTo(0,0)} className={styles.item}>
                    <div className={styles.icon}>
                        <Image src={img4} alt=''/>
                    </div>
                    <div className={styles.label}>Вверх</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar; 