import styles from './Main.module.scss';
import {FC, useState} from 'react';
import { mainTypes } from '../types';
import { Swiper as SwiperWrap, SwiperSlide } from 'swiper/react';
import Swiper , {Thumbs} from 'swiper';
import Container from '@/components/Container/Container';
import Button from '@/components/Button/Button';
import Image from 'next/image';

const Main:FC<mainTypes> = ({
    images,
    name,
    prices,
    descr,
}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<Swiper | null>();
    const {base, standart, premium} = prices || {}

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <div className={styles.main}>
                        <div className={styles.slider_main}>
                            <SwiperWrap 
                                modules={[Thumbs]}
                                // thumbs={{swiper: thumbsSwiper}}
                                className={styles.slider_main_swiper}>
                                {
                                    images?.map((item,index) => (
                                        <SwiperSlide className={styles.slider_main_slide} key={index}>
                                            <Image src={item} alt=""/>
                                        </SwiperSlide>
                                    ))
                                }
                            </SwiperWrap>
                           
                        </div>
                        {/* <div className={styles.slider_thumbs}>
                            <SwiperWrap
                                modules={[Thumbs]}
                                className={styles.slider_thumbs_swiper}
                                slidesPerView={6}
                                watchSlidesProgress
                                onSwiper={setThumbsSwiper}
                                >
                                {
                                    images?.map((item,index) => (
                                        <SwiperSlide className={styles.slider_thumbs_slide} key={index}>    
                                            <Image src={item} alt=""/>
                                        </SwiperSlide>
                                    ))
                                }
                            </SwiperWrap>
                        </div> */}
                    </div>
                    <div className={styles.body}>
                        <h2 className={styles.name}>{name}</h2>
                        <div className={styles.descr}>
                            {descr}
                        </div>
                        <div className={styles.prices}>
                            <div className={styles.panel}>
                                <div className={styles.item}>
                                    <span className={styles.item_name}>Цена чаши BASE:</span>
                                    <span className={styles.item_value}>
                                        {base} ₽
                                    </span>
                                </div>
                                <div className={styles.item}>
                                    <span className={styles.item_name}>Цена чаши STANDART:</span>
                                    <span className={styles.item_value}>
                                        {standart} ₽
                                    </span>
                                </div>
                                <div className={styles.item}>
                                    <span className={styles.item_name}>Цена чаши PREMIUM:</span>
                                    <span className={styles.item_value}>
                                        {premium} ₽
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.action}>
                            <Button
                                text='купить'
                                uppercase
                                />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}


export default Main;