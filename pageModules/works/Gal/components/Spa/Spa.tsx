import styles from '../Part.module.scss';
import img from '@/public/assets/prods-1.png';
import Image from 'next/image';

const Spa = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.part}>
                <div className={styles.head}>
                    Бетонный бассейн
                </div>
                <div className={styles.body}>
                    <div className={styles.item}>
                        <Image src={img} alt=""/>
                    </div>
                    <div className={styles.item}>
                        <Image src={img} alt=""/>
                    </div>
                    <div className={styles.item}>
                        <Image src={img} alt=""/>
                    </div>
                    <div className={styles.item}>
                        <Image src={img} alt=""/>
                    </div>
                    <div className={styles.item}>
                        <Image src={img} alt=""/>
                    </div>
                    <div className={styles.item}>
                        <Image src={img} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Spa;