import styles from './Steps.module.scss';
import Container from '@/components/Container/Container';
import BlockHead from '@/components/BlockHead/BlockHead';
import { useInView } from 'framer-motion';
import {useRef, useEffect} from 'react';
import { childAnim } from '@/helpers/animObjects';
import { animWhileInView } from '@/helpers/animObjects';
import { stepLineAnim } from '@/helpers/animObjects';
import {motion} from 'framer-motion';
import AnimWrap from '@/components/AnimWrap/AnimWrap';
import {FC} from 'react';
import { stepPropsTypes } from './types';

const parentAnim = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            delayChildren: .5,
            staggerChildren: .1,
        }
    },
}

const Steps:FC<stepPropsTypes> = ({
    list,
    title
}) => {

    const bodyRef = useRef<HTMLDivElement>(null);
    const inView = useInView(bodyRef);

    

   
    

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <div className={styles.head}>
                        <BlockHead
                            title={title}
                            isDark
                            />
                    </div>
                    <motion.div variants={parentAnim} {...animWhileInView} ref={bodyRef} className={`${styles.body} ${inView ? styles.active : ''}`}>
                        {
                            list?.map((item, index) => (
                                <div className={styles.item} key={index}>
                                    <AnimWrap className={styles.num}>
                                    <motion.div variants={childAnim('bottom')}>{index + 1}</motion.div>
                                    </AnimWrap>
                                    <motion.div variants={stepLineAnim} className={styles.line}></motion.div>
                                    <AnimWrap className={styles.label}>
                                        <motion.div variants={childAnim((index + 1) % 2 ? 'bottom' : 'top')}>{item.label}</motion.div>
                                    </AnimWrap>
                                </div>
                            ))
                        }
                        {/* <div className={styles.item}>
                            <AnimWrap className={styles.num}>
                            <motion.div variants={childAnim('bottom')}>01</motion.div>
                            </AnimWrap>
                            <motion.div variants={stepLineAnim} className={styles.line}></motion.div>
                            <AnimWrap className={styles.label}>
                                <motion.div variants={childAnim('bottom')}>Консультация</motion.div>
                            </AnimWrap>
                        </div>
                        <div className={styles.item}>
                            <AnimWrap className={styles.num}>
                            <motion.div variants={childAnim('bottom')}>02</motion.div>
                            </AnimWrap>
                            <motion.div variants={stepLineAnim} className={styles.line}></motion.div>
                            <AnimWrap className={styles.label}>
                                <motion.div variants={childAnim('top')}>Предварительная смета</motion.div>
                            </AnimWrap>
                        </div>
                        <div className={styles.item}>
                            <AnimWrap className={styles.num}>
                            <motion.div variants={childAnim('bottom')}>03</motion.div>
                            </AnimWrap>
                            <motion.div variants={stepLineAnim} className={styles.line}></motion.div>
                            <AnimWrap className={styles.label}>
                                <motion.div variants={childAnim('bottom')}>Договор</motion.div>
                            </AnimWrap>
                 
                        </div>
                        <div className={styles.item}>
                            <AnimWrap className={styles.num}>
                            <motion.div variants={childAnim('bottom')}>04</motion.div>
                            </AnimWrap>
                            <motion.div variants={stepLineAnim} className={styles.line}></motion.div>
                            <AnimWrap className={styles.label}>
                                <motion.div variants={childAnim('top')}>Дизайн-проект</motion.div>
                            </AnimWrap>
                        </div>
                        <div className={styles.item}>
                            <AnimWrap className={styles.num}>
                            <motion.div variants={childAnim('bottom')}>05</motion.div>
                            </AnimWrap>
                            <motion.div variants={stepLineAnim} className={styles.line}></motion.div>
                            <AnimWrap className={styles.label}>
                                <motion.div variants={childAnim('bottom')}>Строительство</motion.div>
                            </AnimWrap>
                        </div>
                        <div className={styles.item}>
                            <AnimWrap className={styles.num}>
                            <motion.div variants={childAnim('bottom')}>06</motion.div>
                            </AnimWrap>
                            <motion.div variants={stepLineAnim} className={styles.line}></motion.div>
                            <AnimWrap className={styles.label}>
                                <motion.div variants={childAnim('top')}>Гарантийное сервисное обслуживание</motion.div>
                            </AnimWrap>
                        </div> */}
                    </motion.div>
                </div>
            </Container>
        </div>
    )
}

export default Steps;