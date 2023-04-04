import styles from './Pag.module.scss';
import Button from '@/components/Button/Button';
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs';

const Pag = () => {
    
    return (
        <div className={styles.pag}>
            <div className={styles.next}>
                <Button text='следующая страница' uppercase variant='fill'/>
            </div>
            <div className={styles.nav}>
                <div className={styles.current}>1</div>
                <div className={styles.total}>из 30</div>
                <div className={styles.action}>
                    <button className={`${styles.item}`}><BsChevronLeft/></button>
                    <button className={`${styles.item}`}><BsChevronRight/></button>
                </div>
            </div>
        </div>  
    )
}


export default Pag;