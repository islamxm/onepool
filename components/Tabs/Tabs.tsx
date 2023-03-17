import styles from './Tabs.module.scss';
import { tabsPropsTypes } from './types';

const Tabs = ({
    list,
    activeTab
}: tabsPropsTypes) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.list}>
                {
                    list?.map((item, index) => (
                        <button key={index} className={`${styles.item} ${activeTab === item.id ? styles.active : ''}`}>
                            {item.label}
                        </button>
                    )) 
                }
            </div>
        </div>
    )
}

export default Tabs;