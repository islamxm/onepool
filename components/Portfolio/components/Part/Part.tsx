import styles from './Part.module.scss';
import {FC, useRef, useEffect, useState} from 'react';
import { portItemPropsTypes } from '../../types';
import {Swiper, SwiperSlide} from 'swiper/react';
import Image from 'next/image';
import { Pagination, Autoplay } from 'swiper';
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
    const [slideHeight, setSlideHeight] = useState(0)
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

    return (
        <motion.div variants={parentAnim} {...animWhileInView} className={styles.part}>
                <div className={styles.in}>
                    <AnimWrap className={`${styles.side} ${styles.slider_side}`}>
                        <motion.div style={{height: slideHeight}} variants={childAnim('left')} className={styles.slider}>
                            {
                                head ? (
                                    <div className={styles.head}>
                                        {head}
                                    </div>
                                ) : null
                            }
                            <Swiper
                                className={styles.slider_wr}
                                modules={[Pagination, Autoplay]}
                                autoplay={{
                                    delay: 3000
                                }}
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
                    <AnimWrap className={`${styles.side} ${styles.descr_side}`}>
                        <motion.div variants={childAnim('right')}>
                            <div className={styles.descr}>
                                <div ref={descrRef} className={styles.descr_in}>
                                    {descr}
                                </div>
                            </div>
                        </motion.div>
                    </AnimWrap>
                    
                    
                </div>          
            </motion.div>
    )
    
}


export default Part;