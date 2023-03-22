import styles from './Portfolio.module.scss';
import { portPropsTypes } from './types';
import {FC} from 'react';
import Container from '@/components/Container/Container';
import BlockHead from '@/components/BlockHead/BlockHead';
import Part from './components/Part/Part';




const Portfolio:FC<portPropsTypes> = ({
    list,
    head,
}) => {

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <div className={styles.head}>
                        <BlockHead
                            title={head}
                            />
                    </div>
                    <div className={styles.body}>
                        {
                            list?.map((item, index) => (
                                <Part
                                    images={item.images}
                                    head={head}
                                    key={index}
                                    side={item.side}
                                    descr={item.descr}
                                    />
                            ))
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Portfolio;