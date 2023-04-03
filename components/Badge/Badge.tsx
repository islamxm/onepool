import styles from './Badge.module.scss';
import {FC} from 'react';

const Badge:FC<{
    icon?: React.ReactNode,
    label?: string,
    bgColor?: string
}> = ({
    icon, label, bgColor = '#0857A0'
}) => {

    return (
        <div className={styles.wrapper} style={{backgroundColor: bgColor}}>
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