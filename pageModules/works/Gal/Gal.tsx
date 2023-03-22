import styles from './Gal.module.scss';
import Container from '@/components/Container/Container';
import BlockHead from '@/components/BlockHead/BlockHead';
import Tabs from '@/components/Tabs/Tabs';
import {useState} from 'react';
import Spa from './components/Spa/Spa';
import Bath from './components/Bath/Bath';
import Pool from './components/Pool/Pool';

const tabs = [
    {
        id: '1',
        label: 'бассейны'
    },
    {
        id: '2',
        label: 'спа'
    },
    {
        id: '3',
        label: 'бани и сауны'
    }
]

const Gal = () => {
    const [activeTab, setActiveTab] = useState('1')


    const switchTab = (tab: string) => {
        switch(tab) {
            case '1':
                return <Pool/>
            case '2':
                return <Spa/>
            case '3':
                return <Bath/>
        }
    }


    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <div className={styles.head}>
                        <BlockHead
                            title='Галерея'
                            isDark
                            />
                    </div>
                    <div className={styles.tabs}>
                        <Tabs
                            list={tabs}
                            activeTab={activeTab}
                            onSelect={setActiveTab}
                            />
                    </div>
                    <div className={styles.body}>
                        {switchTab(activeTab)}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Gal;