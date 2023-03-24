import styles from './ServItem.module.scss';
import { servItemTypes } from '../../types';
import {FC} from 'react';
import Container from '@/components/Container/Container';
import {Swiper, SwiperSlide} from 'swiper/react';
import Image from 'next/image';
import AnimWrap from '@/components/AnimWrap/AnimWrap';
import { childAnim } from '@/helpers/animObjects';
import {motion} from 'framer-motion';
import { parentAnim } from '@/helpers/animObjects';
import { animWhileInView } from '@/helpers/animObjects';

const ServItem:FC<servItemTypes> = ({
    images,
    title,
    descr,
    side = 'left'
}) => {

    if(side === 'left') {
        return (
            <motion.div variants={parentAnim} {...animWhileInView} className={`${styles.wrapper} ${styles.left}`}>
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
                                <motion.div className={styles.in} variants={childAnim('right')}>
                                    {descr}
                                </motion.div>
                            </AnimWrap>
                        </div>
                    </div>
                </Container>
            </motion.div>
        )
    }
    if(side === 'right') {
        return (
            <motion.div variants={parentAnim} {...animWhileInView} className={`${styles.wrapper} ${styles.right}`}>
                <Container>
                    <div className={styles.in}>
                        <AnimWrap className={styles.head}>
                            <motion.div variants={childAnim('bottom')}>
                                <h2 className={styles.title}>{title}</h2>
                            </motion.div>
                        </AnimWrap>
                        <div className={styles.body}>
                            <AnimWrap className={styles.descr}>
                                <motion.div className={styles.in} variants={childAnim('left')}>
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
            </motion.div>
        )
    }

    return (
        <></>
    )
    
}

export default ServItem;