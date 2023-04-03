import styles from './Price.module.scss';
import Container from '@/components/Container/Container';
import BlockHead from '@/components/BlockHead/BlockHead';
import { mainTypes } from '../types';
import Button from '@/components/Button/Button';


const Price = ({
    children
}: {
    children?: React.ReactNode
}) => {

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <div className={styles.head}>
                        <BlockHead
                            title='Стоимость бассейна под ключ включает'
                            />
                    </div>
                    <div className={styles.body}>
                        {children}
                    </div>
                    <div className={styles.action}>
                        <Button text='Купить' uppercase variant='fill'/>
                    </div>
                </div>
            </Container>
        </div>
    )
}


export default Price;