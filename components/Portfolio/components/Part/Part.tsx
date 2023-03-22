import styles from './Part.module.scss';
import {FC} from 'react';
import { portItemPropsTypes } from '../../types';
import {Swiper, SwiperSlide} from 'swiper/react';
import Image from 'next/image';



const Part:FC<portItemPropsTypes> = ({
    head,
    descr,
    side = 'left',
    images
}) => {


    if(side === 'left') {
        return (
            <div className={styles.part}>
                <div className={styles.in}>
                    <div className={styles.side}>
                        <div className={styles.slider}>
                            <div className={styles.head}>
                                {head}
                            </div>
                            <Swiper
                                className={styles.slider_wr}
                                >
                                {
                                    images?.map((item,index) => (
                                        <SwiperSlide className={styles.slide} key={index}>
                                            <Image
                                                src={item}
                                                alt=""
                                                width={460}
                                                height={583}
                                                />
                                        </SwiperSlide>
                                    ))
                                }
                                
                            </Swiper>
                        </div>
                    </div>
                    <div className={styles.side}>
                        <div className={styles.descr}>
                            <div className={styles.descr_in}>
                                {descr}
                            </div>
                        </div>
                    </div>
                    
                </div>          
            </div>
        )
    }
    if(side === 'right') {
        return (
            <div className={styles.part}>
                <div className={styles.in}>
                    
                    <div className={styles.side}>
                        <div className={styles.descr}>
                            <div className={styles.descr_in}>
                                {descr}
                            </div>
                        </div>
                    </div>
                    <div className={styles.side}>
                        <div className={styles.slider}>
                            <div className={styles.head}>
                                {head}
                            </div>
                            <Swiper
                                className={styles.slider_wr}
                                >
                                {
                                    images?.map((item,index) => (
                                        <SwiperSlide className={styles.slide} key={index}>
                                            <Image
                                                src={item}
                                                alt=""
                                                width={460}
                                                height={583}
                                                />
                                        </SwiperSlide>
                                    ))
                                }
                                
                            </Swiper>
                        </div>
                    </div>
                </div>          
            </div>
        )
    }

    return null;
    
}


export default Part;