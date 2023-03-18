import styles from './ServItem.module.scss';
import { servItemTypes } from '../../types';
import {FC} from 'react';
import Container from '@/components/Container/Container';
import {Swiper, SwiperSlide} from 'swiper/react';
import Image from 'next/image';

const ServItem:FC<servItemTypes> = ({
    images,
    title,
    descr,
    side = 'left'
}) => {

    if(side === 'left') {
        return (
            <div className={`${styles.wrapper} ${styles.left}`}>
                <Container>
                    <div className={styles.in}>
                        <div className={styles.head}>
                            <h2 className={styles.title}>{title}</h2>
                        </div>
                        <div className={styles.body}>
                            <div className={styles.slider}>
                                <Swiper
                                    className={styles.swiper}
                                    >
                                    {
                                        images?.map((item,index) => (
                                            <SwiperSlide key={index} className={styles.slide}>
                                                <Image
                                                    src={item}
                                                    alt=""
                                                    />
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>
                            <div className={styles.descr}>
                                {descr}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    if(side === 'right') {
        return (
            <div className={`${styles.wrapper} ${styles.right}`}>
                <Container>
                    <div className={styles.in}>
                        <div className={styles.head}>
                            <h2 className={styles.title}>{title}</h2>
                        </div>
                        <div className={styles.body}>
                            <div className={styles.descr}>
                                {descr}
                            </div>
                            <div className={styles.slider}>
                                <Swiper
                                    className={styles.swiper}
                                    >
                                    {
                                        images?.map((item,index) => (
                                            <SwiperSlide key={index} className={styles.slide}>
                                                <Image
                                                    src={item}
                                                    alt=""
                                                    />
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <></>
    )
    
}

export default ServItem;