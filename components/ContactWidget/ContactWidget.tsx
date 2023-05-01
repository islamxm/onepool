import styles from './ContactWidget.module.scss';
import img1 from '@/public/assets/nav-1.svg'
import img2 from '@/public/assets/nav-2.svg'
import img3 from '@/public/assets/nav-3.svg'
import img4 from '@/public/assets/mail-wg.svg'
import Image from 'next/image';
import FbModal from '../FbModal/FbModal';
import {useState} from 'react';


const ContactWidget = () => {
    const [modal, setModal] = useState(false)


    return (
        <div className={styles.wrapper}>
            <FbModal
                open={modal}
                onCancel={() => setModal(false)}
                />
            <a href='https://t.me/POOLFORM_BOT' target='_blank' className={styles.item}>
                <Image src={img2} alt='telegram'/>
            </a>
            <a href='https://wa.me/+79284044995' target='_blank' className={styles.item}>
                <Image src={img3} alt=''/>
            </a>
            <div onClick={() => setModal(true)} className={styles.item}>
                <Image src={img4} alt=''/>
            </div>
        </div>
    )
}

export default ContactWidget;