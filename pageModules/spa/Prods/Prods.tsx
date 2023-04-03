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

import img1 from '@/public/assets/spa-prods-1.png';
import img2 from '@/public/assets/spa-prods-2.png';
import img3 from '@/public/assets/spa-prods-3.png';
import img4 from '@/public/assets/spa-prods-4.png';
import img5 from '@/public/assets/spa-prods-5.png';
import img6 from '@/public/assets/spa-prods-6.png';
import img7 from '@/public/assets/spa-prods-7.png';

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
                    {/* <AnimWrap className={styles.tabs}>
                        <motion.div variants={childAnim('bottom')}>
                            <Tabs
                                onSelect={setActiveTab}
                                activeTab={activeTab}
                                list={tabsList}
                                />
                        </motion.div>
                    </AnimWrap> */}
                    <AnimWrap className={styles.text}>
                        <motion.div variants={childAnim('bottom')}>
                            <p>
                            Раскройте свой внутренний потенциал и наслаждайтесь релаксом в SPA комплексе от нашей компании. Мы предлагаем Вам полный цикл услуг по проектированию и строительству банных и спа-комплексов под ключ, как для частных, так и для общественных нужд. Мы работаем с качественными материалами и предлагаем актуальные и современные виды отделки. Выберите несколько видов дерева на ваш выбор: алтайский и канадский кедр, ольха, африканский абаш из экваториальных лесов, термодерево. Наша команда опытных специалистов позаботится обо всех деталях, чтобы создать незабываемую атмосферу релакса и уюта для вас и ваших гостей. 
                            </p>
                        </motion.div>
                    </AnimWrap>
                    <AnimWrap>
                        <motion.div variants={childAnim('bottom')} className={styles.body}>
                            <div className={styles.item}><Image src={img1} alt=""/></div>
                            <div className={styles.item}><Image src={img2} alt=""/></div>
                            <div className={styles.item}><Image src={img3} alt=""/></div>
                            <div className={styles.item}><Image src={img4} alt=""/></div>
                            <div className={styles.item}><Image src={img5} alt=""/></div>
                            <div className={styles.item}><Image src={img6} alt=""/></div>
                            <div className={styles.item}><Image src={img7} alt=""/></div>
                        </motion.div>
                    </AnimWrap>
                    <AnimWrap className={styles.action}>
                        <motion.div variants={childAnim('bottom')} className={styles.action}>
                            <MoreLink
                                link={'/works'}
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