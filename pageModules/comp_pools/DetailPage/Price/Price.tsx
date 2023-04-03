import styles from './Price.module.scss';
import Container from '@/components/Container/Container';
import BlockHead from '@/components/BlockHead/BlockHead';
import { mainTypes } from '../types';
import Button from '@/components/Button/Button';
import BuyModal from '@/components/BuyModal/BuyModal';
import {useState} from 'react';


interface IPrice extends mainTypes {
    children?: React.ReactNode
}

const Price = ({
    children,
    images,
    name,
    prices,
}: IPrice) => {
    const [buy, setBuy] = useState(false)



    return (
        <div className={styles.wrapper}>
            <BuyModal
                name={name}
                price={prices && prices.base} 
                image={images && images[0]}
                open={buy} 
                onCancel={() => setBuy(false)}/>
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
                        <Button onClick={() => setBuy(true)} text='Купить' uppercase variant='fill'/>
                    </div>
                </div>
            </Container>
        </div>
    )
}


export default Price;