import styles from './Hist.module.scss';
import Container from '@/components/Container/Container';
import BlockHead from '@/components/BlockHead/BlockHead';
import Image from 'next/image';
import img1 from '@/public/assets/hist-1.png';
import img2 from '@/public/assets/hist-2.png';
import img3 from '@/public/assets/hist-3.png';
import img4 from '@/public/assets/hist-4.png';
import img5 from '@/public/assets/hist-5.png';
import img6 from '@/public/assets/hist-6.png';
import AnimWrap from '@/components/AnimWrap/AnimWrap';
import {motion} from 'framer-motion'
import { animWhileInView, childAnim, parentAnim } from '@/helpers/animObjects';


const Hist = () => {

    return (
        <motion.div variants={parentAnim} {...animWhileInView} className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <AnimWrap className={styles.head}>
                        <motion.div variants={childAnim('bottom')}>
                            <BlockHead
                                title={'История одного бассейна'}
                                />
                        </motion.div>
                    </AnimWrap>

                    <div className={styles.body}>
                        <AnimWrap
                            className={styles.item}>
                            <motion.div variants={childAnim('bottom')} className={styles.item_in}>
                                <Image src={img1} alt=""/>
                            </motion.div>
                        </AnimWrap>
                        <AnimWrap className={styles.item}>
                            <motion.div variants={childAnim('bottom')} className={styles.item_in}>
                                <Image src={img2} alt=""/>
                            </motion.div>
                        </AnimWrap>
                        <AnimWrap className={styles.item}>
                            <motion.div variants={childAnim('bottom')} className={styles.item_in}>
                                <Image src={img3} alt=""/>
                            </motion.div>
                        </AnimWrap>
                        <AnimWrap className={styles.item}>
                            <motion.div variants={childAnim('bottom')} className={styles.item_in}>
                                <Image src={img4} alt=""/>
                            </motion.div>
                        </AnimWrap>
                        <AnimWrap className={styles.item}>
                            <motion.div variants={childAnim('bottom')} className={styles.item_in}>
                                <Image src={img5} alt=""/>
                            </motion.div>
                        </AnimWrap>
                        <AnimWrap className={styles.item}>
                            <motion.div variants={childAnim('bottom')} className={styles.item_in}>
                                <Image src={img6} alt=""/>
                            </motion.div>
                        </AnimWrap>
                    </div>
                </div>
            </Container>
        </motion.div>
    )
}


export default Hist;