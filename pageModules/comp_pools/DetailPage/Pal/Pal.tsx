import styles from './Pal.module.scss';
import img1 from '@/public/assets/conc-detail-pal-1.png';
import img2 from '@/public/assets/conc-detail-pal-2.png';
import img3 from '@/public/assets/conc-detail-pal-3.png';
import Image from 'next/image';

const Pal = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.list}>
                <div className={styles.item}>
                    <div className={styles.img}>
                        <Image
                         src={img1}
                         alt=''
                         />
                    </div>
                    <div className={styles.label}>
                    Синий бриллиант         
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.img}>
                        <Image
                         src={img2}
                         alt=''
                         />
                    </div>
                    <div className={styles.label}>
                    Голубой бриллиант           
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.img}>
                        <Image
                         src={img3}
                         alt=''
                         />
                    </div>
                    <div className={styles.label}>
                    Фараон       
                    </div>
                </div>
            </div>
            <div className={styles.ex}>
                Любой другой цвет по желанию заказчика по таблице RAL
            </div>
        </div>
    )
}

export default Pal;