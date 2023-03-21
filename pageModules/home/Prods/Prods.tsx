import styles from './Prods.module.scss';
import BlockHead from '@/components/BlockHead/BlockHead';
import Container from '@/components/Container/Container';
import Tabs from '@/components/Tabs/Tabs';
import { useState } from 'react';
import Image from 'next/image';
import img from '@/public/assets/prods-1.png';
import MoreLink from '@/components/MoreLink/MoreLink';
import AnimWrap from '@/components/AnimWrap/AnimWrap';
import { childAnim } from '@/helpers/animObjects';
import {motion} from 'framer-motion';
import { parentAnim } from '@/helpers/animObjects';
import { animWhileInView } from '@/helpers/animObjects';


const tabsList = [
    {id: '1', label: 'бассейны'},
    {id: '2', label: 'спа'},
    {id: '3', label: 'бани и сауны'},
]




const Prods = () => {
    const [activeTab, setActiveTab] = useState('1')

    return (
        <motion.div variants={parentAnim} {...animWhileInView} className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <AnimWrap className={styles.title}>
                        <motion.div variants={childAnim('bottom')}>
                            <BlockHead
                                isDark
                                title='Строим под ключ'
                                />
                        </motion.div>
                    </AnimWrap>
                    <AnimWrap className={styles.tabs}>
                        <motion.div variants={childAnim('bottom')}>
                            <Tabs
                                onSelect={setActiveTab}
                                activeTab={activeTab}
                                list={tabsList}
                                />
                        </motion.div>
                    </AnimWrap>
                    <AnimWrap className={styles.text}>
                        <motion.div variants={childAnim('bottom')}>
                            <p>
                            Строим под ключ для частного и общественного пользования. Предлагаем актуальные и современные виды отделки. Несколько видов дерева на выбор: алтайский и канадский кедр, ольха, африканский абаш из экваториальных лесов, термодерево.
                            </p>
                        </motion.div>
                    </AnimWrap>
                    <AnimWrap>
                        <motion.div variants={childAnim('bottom')} className={styles.body}>
                            <div className={styles.item}><Image src={img} alt=""/></div>
                            <div className={styles.item}><Image src={img} alt=""/></div>
                            <div className={styles.item}><Image src={img} alt=""/></div>
                            <div className={styles.item}><Image src={img} alt=""/></div>
                            <div className={styles.item}><Image src={img} alt=""/></div>
                        </motion.div>
                    </AnimWrap>
                    <AnimWrap className={styles.action}>
                        <motion.div variants={childAnim('bottom')} className={styles.action}>
                            <MoreLink
                                link={'/'}
                                align={'center'}
                                isDark
                                />
                        </motion.div>
                    </AnimWrap>
                    
                </div>
            </Container>
        </motion.div>
    )
}

export default Prods;