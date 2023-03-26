import styles from './Colors.module.scss';
import Container from '@/components/Container/Container';
import BlockHead from '@/components/BlockHead/BlockHead';
import {FC} from 'react';
import { colorPropsTypes } from './types';
import Item from './components/Item/Item';





const Colors:FC<colorPropsTypes> = ({
    list
}) => {

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <div className={styles.head}>
                        <BlockHead
                            title='Цвет бассейна'
                            />
                    </div>
                    <div className={styles.body}>
                        {
                            list?.map((item,index) => (
                                <div className={styles.item} key={index}>
                                    <Item {...item} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Colors;