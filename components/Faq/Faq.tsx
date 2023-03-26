import styles from './Faq.module.scss';
import Container from '../Container/Container';
import BlockHead from '../BlockHead/BlockHead';
import {FC} from 'react';
import { faqItemProps, faqPropsTypes } from './types';
import Item from './components/Item/Item';

const list:faqItemProps[] = [
    {
        head: 'Необходимо ли производить консервацию бассейна на зимний период и как это осуществляется?',
        text: 'Самым эффективным при физических нагрузках является противоток. Устройство искусственного течения, которое при небольших размерах бассейна, позволяет реально заниматся даже спортивным плаванием. Плюс к этому его можно использовать и как гидромассаж.'
    },
    {
        head: 'Подскажите самые эффективные водные атракционы',
        text: 'Самым эффективным при физических нагрузках является противоток. Устройство искусственного течения, которое при небольших размерах бассейна, позволяет реально заниматся даже спортивным плаванием. Плюс к этому его можно использовать и как гидромассаж.'
    },
    {
        head: 'Что значит обслуживание бассейна?',
        text: 'Самым эффективным при физических нагрузках является противоток. Устройство искусственного течения, которое при небольших размерах бассейна, позволяет реально заниматся даже спортивным плаванием. Плюс к этому его можно использовать и как гидромассаж.'
    }
]

const Faq:FC = () => {

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <div className={styles.head}>
                        <BlockHead title='Ответы на Ваши вопросы'/>
                    </div>
                    <div className={styles.body}>
                        {
                            list?.map((item,index) => (
                                <div className={styles.item} key={index}>
                                    <Item {...item}/>
                                </div>
                            ))
                        }                
                    </div>
                </div>
            </Container>
        </div>
    )
}


export default Faq;