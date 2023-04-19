import styles from './ServItem.module.scss';
import { servItemTypes } from '../../types';
import {FC, useEffect, useState} from 'react';
import Container from '@/components/Container/Container';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import Image from 'next/image';
import AnimWrap from '@/components/AnimWrap/AnimWrap';
import { childAnim } from '@/helpers/animObjects';
import {motion} from 'framer-motion';
import { parentAnim } from '@/helpers/animObjects';
import {useRef} from 'react';
import { animWhileInView } from '@/helpers/animObjects';
import 'swiper/css/pagination';



const ServItem:FC<servItemTypes> = ({
    images,
    title,
    descr,
    side = 'left'
}) => {
    const [slideHeight, setSlideHeight] = useState(0)
    const pagRef = useRef<HTMLDivElement>(null)
    const descrRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        getSize()
        window.addEventListener('resize', getSize)
        return () => {
            window.removeEventListener('resize', getSize)
        }
    }, [descrRef])


    const getSize = () => {
        if(descrRef?.current) {
            setSlideHeight(descrRef?.current?.scrollHeight)
        }
    }



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
                                        pagination={{
                                            bulletClass: styles.pag_item,
                                            el: `.${styles.pag}`,
                                            bulletActiveClass: styles.active,
                                            clickable: true
                                        }}
                                        modules={[Pagination, Autoplay]}
                                        autoplay={{delay: 3000}}
                                        className={styles.swiper}
                                        >
                                        {
                                            images?.map((item,index) => (
                                                <SwiperSlide style={{height: slideHeight}} key={index} className={styles.slide}>
                                                    <Image
                                                        src={item}
                                                        alt=""
                                                        placeholder={'blur'}
                                                        />
                                                </SwiperSlide>
                                            ))
                                        }
                                        {
                                            images && images?.length > 1 ? (
                                                <div ref={pagRef} className={styles.pag}></div>
                                            ) : null
                                        }
                                    </Swiper>
                                </motion.div>
                            </AnimWrap>
                            <AnimWrap className={styles.descr}>
                                <motion.div className={styles.in} ref={descrRef} variants={childAnim('right')}>
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
                                <motion.div className={styles.in} ref={descrRef} variants={childAnim('left')}>
                                    {descr}
                                </motion.div>
                            </AnimWrap>
                            <AnimWrap className={styles.slider}>
                                <motion.div variants={childAnim('right')}>
                                    <Swiper
                                        pagination={{
                                            bulletClass: styles.pag_item,
                                            el: `.${styles.pag}`,
                                            bulletActiveClass: styles.active,
                                            clickable: true
                                        }}
                                        modules={[Pagination, Autoplay]}
                                        autoplay={{delay: 2000}}
                                        className={styles.swiper}
                                        >
                                        {
                                            images?.map((item,index) => (
                                                <SwiperSlide style={{height: slideHeight}}  key={index} className={styles.slide}>
                                                    <Image
                                                        src={item}
                                                        alt=""
                                                        placeholder={'blur'}
                                                        />
                                                </SwiperSlide>
                                            ))
                                        }
                                        {
                                            images && images?.length > 1 ? (
                                                <div ref={pagRef} className={styles.pag}></div>
                                            ) : null
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