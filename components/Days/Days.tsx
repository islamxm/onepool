import styles from './Days.module.scss';
import Container from '../Container/Container';
import BlockHead from '../BlockHead/BlockHead';
import {FC} from 'react';
import { daysPropsTypes } from './types';
import Image from 'next/image';
import Button from '../Button/Button';

const Days:FC<daysPropsTypes> = ({list}) => {

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <div className={styles.head}>
                        <BlockHead
                            title='Считаем дни до заплыва'
                            />
                    </div>
                    <div className={styles.body}>
                        {
                            list?.map((item, index) => (
                                <div className={styles.item} key={index}>
                                    <div className={styles.item_in}>
                                        <div className={styles.img}>
                                            {
                                                item?.image ? <Image src={item.image} alt=""/> : null
                                            }
                                        </div>
                                        <div className={styles.head}>
                                            день {item.day}
                                        </div>
                                        <div className={styles.title}>
                                            {item.head}
                                        </div>
                                        <div className={styles.text}>
                                            {item.text}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className={styles.action}>
                        <Button
                            text='расчитать стоимость'
                            uppercase
                            />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Days;