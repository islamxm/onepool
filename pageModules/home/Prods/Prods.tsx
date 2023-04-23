import styles from './Prods.module.scss';
import BlockHead from '@/components/BlockHead/BlockHead';
import Container from '@/components/Container/Container';
import Tabs from '@/components/Tabs/Tabs';
import { useCallback, useState } from 'react';
import Image from 'next/image';
import img from '@/public/assets/prods-1.png';
import MoreLink from '@/components/MoreLink/MoreLink';
import AnimWrap from '@/components/AnimWrap/AnimWrap';
import { childAnim } from '@/helpers/animObjects';
import {motion} from 'framer-motion';
import { parentAnim } from '@/helpers/animObjects';
import { animWhileInView } from '@/helpers/animObjects';
import img2_1 from '@/public/assets/prods-2-1.png';
import img2_2 from '@/public/assets/prods-2-2.png';
import img2_3 from '@/public/assets/prods-2-3.png';
import img2_4 from '@/public/assets/prods-2-4.png';
import img2_5 from '@/public/assets/prods-2-5.png';
import img2_6 from '@/public/assets/prods-2-6.png';
import img2_7 from '@/public/assets/prods-2-7.png';

import img1_1 from '@/public/assets/prods-1-1.png';
import img1_2 from '@/public/assets/prods-1-2.png';
import img1_3 from '@/public/assets/prods-1-3.png';
import img1_4 from '@/public/assets/prods-1-4.png';
import img1_5 from '@/public/assets/prods-1-5.png';
import img1_6 from '@/public/assets/prods-1-6.png';
import img1_7 from '@/public/assets/prods-1-7.png';

import img3_1 from '@/public/assets/prods-3-1.png';
import img3_2 from '@/public/assets/prods-3-2.png';
import img3_3 from '@/public/assets/prods-3-3.png';
import img3_4 from '@/public/assets/prods-3-4.png';
import img3_5 from '@/public/assets/prods-3-5.png';
import img3_6 from '@/public/assets/prods-3-6.png';
import img3_7 from '@/public/assets/prods-3-7.png';



const tabsList = [
    {id: '1', label: 'бассейны'},
    {id: '2', label: 'спа'},
    {id: '3', label: 'бани и сауны'}
]

{/* <AnimWrap>
<motion.div variants={childAnim('bottom')} className={styles.body}>
    <div className={styles.item}><Image src={img1} alt=""/></div>
    <div className={styles.item}><Image src={img2} alt=""/></div>
    <div className={styles.item}><Image src={img3} alt=""/></div>
    <div className={styles.item}><Image src={img4} alt=""/></div>
    <div className={styles.item}><Image src={img5} alt=""/></div>
    <div className={styles.item}><Image src={img6} alt=""/></div>
    <div className={styles.item}><Image src={img7} alt=""/></div>
</motion.div>
</AnimWrap> */}


const Prods = () => {
    const [activeTab, setActiveTab] = useState('1')


    const switchGallery = useCallback((activeTab: string) => {
        switch(activeTab) {
            case '2':
                return (
                    <div className={styles.body}>
                        <div className={styles.item}><Image placeholder='blur' src={img1_1} alt=""/></div>
                        <div className={styles.item}><Image placeholder='blur' src={img1_2} alt=""/></div>
                        <div className={styles.item}><Image placeholder='blur' src={img1_3} alt=""/></div>
                        <div className={styles.item}><Image placeholder='blur' src={img1_4} alt=""/></div>
                        <div className={styles.item}><Image placeholder='blur' src={img1_5} alt=""/></div>
                        <div className={styles.item}><Image placeholder='blur' src={img1_6} alt=""/></div>
                        <div className={styles.item}><Image placeholder='blur' src={img1_7} alt=""/></div>
                    </div>
                )
            case '1':
                return (
                    
                    <div className={styles.body}>
                        <div className={styles.item}><Image placeholder='blur' src={img2_1} alt=""/></div>
                        <div className={styles.item}><Image placeholder='blur' src={img2_2} alt=""/></div>
                        <div className={styles.item}><Image placeholder='blur' src={img2_3} alt=""/></div>
                        <div className={styles.item}><Image placeholder='blur' src={img2_4} alt=""/></div>
                        <div className={styles.item}><Image placeholder='blur' src={img2_5} alt=""/></div>
                        <div className={styles.item}><Image placeholder='blur' src={img2_6} alt=""/></div>
                        <div className={styles.item}><Image placeholder='blur' src={img2_7} alt=""/></div>
                    </div>
                )
            case '3':
                return (
                    <div className={styles.body}>
                        <div className={styles.item}><Image placeholder='blur' src={img3_1} alt=""/></div>
                        <div className={styles.item}><Image placeholder='blur' src={img3_2} alt=""/></div>
                        <div className={styles.item}><Image placeholder='blur' src={img3_3} alt=""/></div>
                        <div className={styles.item}><Image placeholder='blur' src={img3_4} alt=""/></div>
                        <div className={styles.item}><Image placeholder='blur' src={img3_5} alt=""/></div>
                        <div className={styles.item}><Image placeholder='blur' src={img3_6} alt=""/></div>
                        <div className={styles.item}><Image placeholder='blur' src={img3_7} alt=""/></div>
                    </div>
                )
        }
    }, [activeTab])






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
                            В поисках идеальной бани или сауны для вашего загородного дома? PoolForm строит их под ключ как для частного, 
                            так и для общественного пользования, с использованием только самых современных технологий и материалов. Мы предлагаем широкий выбор отделки, включая несколько видов дерева, таких как алтайский и канадский кедр, ольха, африканский абаш 
                            из экваториальных лесов, и термодерево, которые гармонично подойдут к любому интерьеру. Доверьте нам создание идеального места для релаксации и наслаждения!
                            </p>
                        </motion.div>
                    </AnimWrap>
                    {
                        switchGallery(activeTab)
                    }
                    
                    <AnimWrap className={styles.action}>
                        <motion.div variants={childAnim('bottom')} className={styles.action}>
                            <MoreLink
                                link={'/works?tab=1'}
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