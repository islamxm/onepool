import styles from './Days.module.scss';
import Container from '../Container/Container';
import BlockHead from '../BlockHead/BlockHead';
import {FC} from 'react';
import { daysPropsTypes } from './types';

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
                        {/* {
                            list?.map((item, index) => (

                            ))
                        } */}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Days;