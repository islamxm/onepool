import styles from './Hero.module.scss';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper';
import Container from '@/components/Container/Container';
import Button from '@/components/Button/Button';
import img1 from '@/public/assets/hero-1.png';
import img2 from '@/public/assets/hero-2.png';
import img3 from '@/public/assets/hero-3.png';
import Image from 'next/image';
import { useRef } from 'react';
import { animWhileInView, childAnim, parentAnim } from '@/helpers/animObjects';
import AnimWrap from '@/components/AnimWrap/AnimWrap';
import {motion} from 'framer-motion';

const Hero = () => {
    const bodyRef = useRef<HTMLDivElement>(null)

    const scrollDown = () => {
        if(bodyRef?.current) {
            
            window.scrollTo(0, bodyRef?.current?.scrollHeight - 200)
        }
    }

    return (
        <div ref={bodyRef} className={styles.wrapper}>
            <div className={styles.slider}>
                <Swiper
                    className={styles.list}
                    modules={[Autoplay, EffectFade]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction:false
                    }}
                    speed={700}
                    loop
                    effect={'fade'}
                    >
                    <SwiperSlide className={styles.item}>
                        <Image
                            src={img1}
                            alt=""
                            />
                    </SwiperSlide>
                    <SwiperSlide className={styles.item}>
                        <Image
                            src={img2}
                            alt=""
                            />
                    </SwiperSlide>
                    <SwiperSlide className={styles.item}>
                        <Image
                            src={img3}
                            alt=""
                            />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className={styles.main}>
                <Container>
                    <motion.div 
                        variants={parentAnim}
                        {...animWhileInView}
                        className={styles.body}>
                        <AnimWrap
                            className={styles.title}
                            >
                            <motion.h1 variants={childAnim('bottom')}>
                                Бассейны любой сложности и формы, СПА-комплексы, хаммамы, бани 
                                и сауны, все по индивидуальному проекту.
                            </motion.h1>
                        </AnimWrap>
                        <AnimWrap
                            className={styles.text}
                            >
                            <motion.div variants={childAnim('bottom')}>
                                Собственное производство. Строим бассейны с 2001 года по всей России!
                            </motion.div>
                        </AnimWrap>
                        <AnimWrap>
                            <motion.div variants={childAnim('bottom')} className={styles.action}>
                                <div className={styles.item}>
                                    <Button 
                                        text='Рассчитать стоимость'
                                        uppercase
                                        variant='fill'
                                        style={{
                                            padding: '20px 50px'
                                        }}
                                        />
                                </div>
                                <div className={styles.item}>
                                    <Button
                                        text='Посмотреть проекты'
                                        variant='bordered'
                                        uppercase
                                        style={{
                                            padding: '20px 50px'
                                        }}
                                        />
                                </div>
                            </motion.div>
                        </AnimWrap>
                        
                    </motion.div>
                    <button onClick={scrollDown} className={styles.godown}></button>
                </Container>
            </div>
        </div>
    )
}


export default Hero;