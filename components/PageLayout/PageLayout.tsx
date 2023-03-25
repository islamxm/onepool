import styles from './PageLayout.module.scss';
import {motion} from 'framer-motion';

const pageEnterAnimProps = {
    initial:{opacity: 0},
    animate:{opacity: 1},
    transition:{duration: 0.5},
    exit:{opacity: 0}
}

const PageLayout = ({
    children
}: {
    children?: React.ReactNode
}) => {

    return (
        <motion.div 
            {...pageEnterAnimProps}
            className={styles.wrapper}>
            {children}
        </motion.div>
    )
}

export default PageLayout;