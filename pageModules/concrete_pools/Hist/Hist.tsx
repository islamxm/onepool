import styles from './Hist.module.scss';
import Container from '@/components/Container/Container';
import BlockHead from '@/components/BlockHead/BlockHead';
import Image from 'next/image';
import img1 from '@/public/assets/hist-1.png';
import img2 from '@/public/assets/hist-2.png';
import img3 from '@/public/assets/hist-3.png';
import img4 from '@/public/assets/hist-4.png';
import img5 from '@/public/assets/hist-5.png';
import img6 from '@/public/assets/hist-6.png';

const Hist = () => {

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <div className={styles.head}>
                        <BlockHead
                            title={'История одного бассейна'}
                            />
                    </div>

                    <div className={styles.body}>
                        <div className={styles.item}>
                            <div className={styles.item_in}>
                                <Image src={img1} alt=""/>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.item_in}>
                                <Image src={img2} alt=""/>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.item_in}>
                                <Image src={img3} alt=""/>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.item_in}>
                                <Image src={img4} alt=""/>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.item_in}>
                                <Image src={img5} alt=""/>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.item_in}>
                                <Image src={img6} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}


export default Hist;