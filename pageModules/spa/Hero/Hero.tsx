import styles from './Hero.module.scss';
import Container from '@/components/Container/Container';
import FeedbackSm from '@/components/FeedbackSm/FeedbackSm';
import { heroPropsTypes } from './types';
import {FC} from 'react';
import Image from 'next/image';
import { parentAnim, childAnim, animWhileInView } from '@/helpers/animObjects';
import AnimWrap from '@/components/AnimWrap/AnimWrap';
import {motion} from 'framer-motion';


const Hero:FC<heroPropsTypes> = ({
    title,
    subtitle,
    bg
}) => {

    return (
        <motion.div variants={parentAnim} {...animWhileInView} className={styles.wrapper}>
            {
                bg ? (
                    <div className={styles.bg}>
                        <Image
                            placeholder={'blur'}
                            src={bg}
                            alt={'bg'}
                            />
                    </div>
                ) : null
            }
            
            <Container>
                <div className={styles.in}>
                    <div className={styles.main}>
                        <AnimWrap className={styles.title}>
                            <motion.h1 variants={childAnim('bottom')} className={`page-title `}>
                                {title}
                            </motion.h1>
                        </AnimWrap>
                        <AnimWrap className={styles.ex}>
                            <motion.div variants={childAnim('bottom')}>
                                {subtitle}
                            </motion.div>
                        </AnimWrap> 
                    </div>
                    <AnimWrap className={styles.form}>
                        <motion.div variants={childAnim('right')}>
                        <FeedbackSm/>
                        </motion.div>
                    </AnimWrap>
                </div>
            </Container>
        </motion.div>
    )
}

export default Hero;