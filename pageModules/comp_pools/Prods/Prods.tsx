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

import img1 from '@/public/assets/comp-prods-1.png';
import img2 from '@/public/assets/comp-prods-2.png';
import img3 from '@/public/assets/comp-prods-3.png';
import img4 from '@/public/assets/comp-prods-4.png';
import img5 from '@/public/assets/comp-prods-5.png';
import img6 from '@/public/assets/comp-prods-6.png';
import img7 from '@/public/assets/comp-prods-7.png';

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
                                title='Композитные бассейны'
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
                            Мы производим композитные бассейны, используя только тщательно отобранные материалы от проверенных поставщиков. Наша технология отточена годами и учитывает условия эксплуатации в нашей полосе. Качество наших чаш не оставляет сомнений, поскольку мы не экономим на материалах. Мы верим, что качество не может стоить дешево, поэтому наши чаши могут быть не самыми дешевыми на рынке. Тем не менее, когда вы рассматриваете стоимость бассейна &quot;под ключ&quot;, цена нашей чаши составляет только от 20 до 40 процентов. Мы убеждены, что экономить на качестве чаши не стоит, поскольку это может привести к серьезным проблемам в будущем.
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