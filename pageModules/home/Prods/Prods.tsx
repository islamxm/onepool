import styles from './Prods.module.scss';
import BlockHead from '@/components/BlockHead/BlockHead';
import Container from '@/components/Container/Container';
import Tabs from '@/components/Tabs/Tabs';
import { useState } from 'react';
import Image from 'next/image';
import img from '@/public/assets/prods-1.png';
import MoreLink from '@/components/MoreLink/MoreLink';

const tabsList = [
    {id: '1', label: 'бассейны'},
    {id: '2', label: 'спа'},
    {id: '3', label: 'бани и сауны'},
]

const Prods = () => {
    const [activeTab, setActiveTab] = useState('1')

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <div className={styles.title}>
                        <BlockHead
                            isDark
                            title='Строим под ключ'
                            />
                    </div>
                    <div className={styles.tabs}>
                        <Tabs
                            onSelect={setActiveTab}
                            activeTab={activeTab}
                            list={tabsList}
                            />
                    </div>
                    <div className={styles.text}>
                        <p>
                        Строим под ключ для частного и общественного пользования. Предлагаем актуальные и современные виды отделки. Несколько видов дерева на выбор: алтайский и канадский кедр, ольха, африканский абаш из экваториальных лесов, термодерево.
                        </p>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.item}><Image src={img} alt=""/></div>
                        <div className={styles.item}><Image src={img} alt=""/></div>
                        <div className={styles.item}><Image src={img} alt=""/></div>
                        <div className={styles.item}><Image src={img} alt=""/></div>
                        <div className={styles.item}><Image src={img} alt=""/></div>
                    </div>
                    <div className={styles.action}>
                        <MoreLink
                            link={'/'}
                            align={'center'}
                            isDark
                            />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Prods;