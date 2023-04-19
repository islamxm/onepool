import styles from '../Part.module.scss';
import img from '@/public/assets/prods-1.png';
import Image from 'next/image';

import img1 from '@/public/assets/prods-2-1.png'
import img2 from '@/public/assets/prods-2-2.png'
import img3 from '@/public/assets/prods-2-3.png'
import img4 from '@/public/assets/prods-2-4.png'
import img5 from '@/public/assets/prods-2-5.png'
import img6 from '@/public/assets/prods-2-6.png'
import img7 from '@/public/assets/prods-2-7.png'

const Spa = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.part}>
                <div className={styles.head}>
                    Бетонный бассейн
                </div>
                <div className={styles.body}>
                    <div className={styles.item}>
                        <Image src={img1} alt=""/>
                    </div>
                    <div className={styles.item}>
                        <Image src={img2} alt=""/>
                    </div>
                    <div className={styles.item}>
                        <Image src={img3} alt=""/>
                    </div>
                    <div className={styles.item}>
                        <Image src={img4} alt=""/>
                    </div>
                    <div className={styles.item}>
                        <Image src={img5} alt=""/>
                    </div>
                    <div className={styles.item}>
                        <Image src={img6} alt=""/>
                    </div>
                    <div className={styles.item}>
                        <Image src={img7} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Spa;