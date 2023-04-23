import styles from './Tabs.module.scss';
import { tabsPropsTypes } from './types';

const Tabs = ({
    list,
    activeTab,
    onSelect,
    isLight
}: tabsPropsTypes) => {

    return (
        <div className={`${styles.wrapper} ${isLight ? styles.light : ''}`}>
            <div className={styles.list}>
                {
                    list?.map((item, index) => (
                        <button 
                            onClick={() => onSelect(item.id)}
                            key={index} className={`${styles.item} ${activeTab === item.id ? styles.active : ''}`}>
                            <span>{item.label}</span>
                        </button>
                    )) 
                }
            </div>
        </div>
    )
}

export default Tabs;