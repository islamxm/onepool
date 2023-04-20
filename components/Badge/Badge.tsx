import styles from './Badge.module.scss';
import {FC} from 'react';

const Badge:FC<{
    icon?: React.ReactNode,
    label?: string,
    bgColor?: string,
    active?: boolean
}> = ({
    icon, label, bgColor = '#0857A0', active
}) => {

    return (
        <div className={`${styles.wrapper} ${active ? styles.active : ''}`} style={{backgroundColor: bgColor, boxShadow: active ? `0px 0px 10px 4px ${bgColor}` : 'none'}}>
            {
                icon ? (
                    <div className={styles.icon}>{icon}</div>
                ) : null
            }
            <div className={styles.label}>{label}</div>
        </div>
    )
}

export default Badge;