import styles from './Part.module.scss';
import {FC} from 'react';
import { portItemPropsTypes } from '../../types';
import {Swiper, SwiperSlide} from 'swiper/react';
import Image from 'next/image';
import { Pagination } from 'swiper';
import {motion} from 'framer-motion';
import { parentAnim,childAnim } from '@/helpers/animObjects';
import { animWhileInView } from '@/helpers/animObjects';
import AnimWrap from '@/components/AnimWrap/AnimWrap';

const Part:FC<portItemPropsTypes> = ({
    head,
    descr,
    side = 'left',
    images
}) => {


    if(side === 'left') {
        return (
            <motion.div variants={parentAnim} {...animWhileInView} className={styles.part}>
                <div className={styles.in}>
                    <AnimWrap className={styles.side}>
                        <motion.div variants={childAnim('left')} className={styles.slider}>
                            <div className={styles.head}>
                                {head}
                            </div>
                            <Swiper
                                className={styles.slider_wr}
                                modules={[Pagination]}
                                pagination={{
                                    bulletClass: styles.pag_item,
                                    el: `.${styles.pag}`,
                                    bulletActiveClass: styles.active,
                                    clickable: true
                                }}
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
                                 <div className={styles.pag}></div>
                                
                            </Swiper>
                        </motion.div>
                    </AnimWrap>
                    <AnimWrap className={styles.side}>
                        <motion.div variants={childAnim('right')}>
                            <div className={styles.descr}>
                                <div className={styles.descr_in}>
                                    {descr}
                                </div>
                            </div>
                        </motion.div>
                    </AnimWrap>
                    
                    
                </div>          
            </motion.div>
        )
    }
    if(side === 'right') {
        return (
            <motion.div variants={parentAnim} {...animWhileInView} className={styles.part}>
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
                                modules={[Pagination]}
                                pagination={{
                                    bulletClass: styles.pag_item,
                                    el: `.${styles.pag}`,
                                    bulletActiveClass: styles.active,
                                    clickable: true
                                }}
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
                                <div className={styles.pag}></div>
                                
                            </Swiper>
                        </div>
                    </div>
                </div>          
            </motion.div>
        )
    }

    return null;
    
}


export default Part;