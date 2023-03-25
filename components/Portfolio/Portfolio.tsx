import styles from './Portfolio.module.scss';
import { portPropsTypes } from './types';
import {FC} from 'react';
import Container from '@/components/Container/Container';
import BlockHead from '@/components/BlockHead/BlockHead';
import Part from './components/Part/Part';
import {motion} from 'framer-motion';
import { parentAnim,childAnim } from '@/helpers/animObjects';
import { animWhileInView } from '@/helpers/animObjects';
import AnimWrap from '../AnimWrap/AnimWrap';



const Portfolio:FC<portPropsTypes> = ({
    list,
    head,
}) => {

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <motion.div variants={parentAnim} {...animWhileInView} className={styles.top}>

                        <AnimWrap className={styles.head}>
                            <motion.div variants={childAnim('bottom')}>
                                <BlockHead
                                title={head}
                                />
                            </motion.div>
                        </AnimWrap>
                    </motion.div>
                    <div className={styles.body}>
                        {
                            list?.map((item, index) => (
                                <Part
                                    images={item.images}
                                    head={item.head}
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