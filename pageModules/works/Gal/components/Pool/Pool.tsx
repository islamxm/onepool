import styles from '../Part.module.scss';
import img from '@/public/assets/prods-1.png';
import Image from 'next/image';
import img1 from '@/public/assets/works-pool-1.png';
import img2 from '@/public/assets/works-pool-2.png';
import img3 from '@/public/assets/works-pool-3.png';
import img4 from '@/public/assets/works-pool-4.png';
import img5 from '@/public/assets/works-pool-5.png';
import img6 from '@/public/assets/works-pool-6.png';
import img7 from '@/public/assets/works-pool-7.png';
import img8 from '@/public/assets/works-pool-8.png';
import img9 from '@/public/assets/works-pool-9.png';
import img10 from '@/public/assets/works-pool-10.png';
import img11 from '@/public/assets/works-pool-11.png';
import img12 from '@/public/assets/works-pool-12.png';
import img13 from '@/public/assets/works-pool-13.png';
import img14 from '@/public/assets/works-pool-14.png';
import img15 from '@/public/assets/works-pool-15.png';
import img16 from '@/public/assets/works-pool-16.png';


const Pool = () => {

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
                    <div className={styles.item}>
                        <Image src={img8} alt=""/>
                    </div>
                </div>
            </div>
            <div className={styles.part}>
                <div className={styles.head}>
                    Железный бассейн
                </div>
                <div className={styles.body}>
                    <div className={styles.item}>
                        <Image src={img9} alt=""/>
                    </div>
                    <div className={styles.item}>
                        <Image src={img10} alt=""/>
                    </div>
                    <div className={styles.item}>
                        <Image src={img11} alt=""/>
                    </div>
                    <div className={styles.item}>
                        <Image src={img12} alt=""/>
                    </div>
                    <div className={styles.item}>
                        <Image src={img13} alt=""/>
                    </div>
                    <div className={styles.item}>
                        <Image src={img14} alt=""/>
                    </div>
                    <div className={styles.item}>
                        <Image src={img15} alt=""/>
                    </div>
                    <div className={styles.item}>
                        <Image src={img16} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pool;