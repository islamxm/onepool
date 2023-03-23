import styles from './Vendor.module.scss';
import Container from '@/components/Container/Container';
import BlockHead from '@/components/BlockHead/BlockHead';
import img1 from '@/public/assets/vendor-1.png';
import img2 from '@/public/assets/vendor-2.png';
import img3 from '@/public/assets/vendor-3.png';
import img4 from '@/public/assets/vendor-4.png';
import img5 from '@/public/assets/vendor-5.png';
import img6 from '@/public/assets/vendor-6.png';
import Image from 'next/image';


const Vendor = () => {

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <div className={styles.head}>
                        <BlockHead
                            title='Оборудование производства Испании и Германии'
                            isDark
                            />
                    </div>
                    <div className={styles.body}>
                        <div className={styles.item}>
                            <div className={styles.item_in}>
                            <div className={styles.img}>
                                <Image src={img1} alt=""/>
                            </div>
                            <div className={styles.descr}>
                                <div className={styles.head}>Подогрев</div>
                            </div>
                            </div>
                            
                        </div>
                        <div className={styles.item}>
                            <div className={styles.item_in}>
                            <div className={styles.img}>
                                <Image src={img2} alt=""/>
                            </div>
                            <div className={styles.descr}>
                                <div className={styles.head}>Обеззараживание</div>
                            </div>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.item_in}>
                            <div className={styles.img}>
                                <Image src={img3} alt=""/>
                            </div>
                            <div className={styles.descr}>
                                <div className={styles.head}>Фильтрация</div>
                            </div>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.item_in}>
                            <div className={styles.img}>
                                <Image src={img4} alt=""/>
                            </div>
                            <div className={styles.descr}>
                                <div className={styles.head}>Противоток</div>
                            </div>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.item_in}>
                            <div className={styles.img}>
                                <Image src={img5} alt=""/>
                            </div>
                            <div className={styles.descr}>
                                <div className={styles.head}>Гидромассаж Аэромассаж</div>
                            </div>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.item_in}>
                            <div className={styles.img}>
                                <Image src={img6} alt=""/>
                            </div>
                            <div className={styles.descr}>
                                <div className={styles.head}>Освещение</div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Vendor;