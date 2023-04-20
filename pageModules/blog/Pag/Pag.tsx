import styles from './Pag.module.scss';
import Button from '@/components/Button/Button';
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs';
import {FC} from 'react';


interface IPag {
    current: number,
    total: number,
    nextPage: (...args: any[]) => any, 
    prevPage: (...args: any[]) => any, 
}


const Pag:FC<IPag> = ({
    current,
    total,
    prevPage,
    nextPage
}) => {
    
    return (
        <div className={styles.pag}>
            <div className={styles.next}>
                <Button disabled={current === total} text='следующая страница' uppercase variant='fill'/>
            </div>
            <div className={styles.nav}>
                <div className={styles.current}>{current}</div>
                <div className={styles.total}>из {total}</div>
                <div className={styles.action}>
                    <button 
                        onClick={prevPage}
                        disabled={current === 1} 
                        className={`${styles.item}`}><BsChevronLeft/></button>
                    <button
                        onClick={nextPage} 
                        disabled={current === total} 
                        className={`${styles.item}`}><BsChevronRight/></button>
                </div>
            </div>
        </div>  
    )
}


export default Pag;