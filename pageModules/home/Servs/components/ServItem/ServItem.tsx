import styles from './ServItem.module.scss';
import { servItemTypes } from '../../types';
import {FC} from 'react';
import Container from '@/components/Container/Container';
import {Swiper, SwiperSlide} from 'swiper/react';
import Image from 'next/image';
import AnimWrap from '@/components/AnimWrap/AnimWrap';
import { childAnim } from '@/helpers/animObjects';
import {motion} from 'framer-motion';



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
                        <AnimWrap className={styles.head}>
                            <motion.div variants={childAnim('bottom')}>
                                <h2 className={styles.title}>{title}</h2>
                            </motion.div>
                        </AnimWrap>
                        <div className={styles.body}>
                            <AnimWrap className={styles.slider}>
                                <motion.div variants={childAnim('left')}>
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
                                </motion.div>
                            </AnimWrap>
                            <AnimWrap className={styles.descr}>
                                <motion.div variants={childAnim('right')}>
                                    {descr}
                                </motion.div>
                            </AnimWrap>
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
                        <AnimWrap className={styles.head}>
                            <motion.div variants={childAnim('bottom')}>
                                <h2 className={styles.title}>{title}</h2>
                            </motion.div>
                        </AnimWrap>
                        <div className={styles.body}>
                            <AnimWrap className={styles.descr}>
                                <motion.div variants={childAnim('left')}>
                                    {descr}
                                </motion.div>
                            </AnimWrap>
                            <AnimWrap className={styles.slider}>
                                <motion.div variants={childAnim('right')}>
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
                                </motion.div>
                            </AnimWrap>
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