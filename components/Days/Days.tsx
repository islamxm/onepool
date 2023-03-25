import styles from './Days.module.scss';
import Container from '../Container/Container';
import BlockHead from '../BlockHead/BlockHead';
import {FC} from 'react';
import { daysPropsTypes } from './types';
import Image from 'next/image';
import Button from '../Button/Button';
import AnimWrap from '../AnimWrap/AnimWrap';
import { animWhileInView } from '@/helpers/animObjects';
import { parentAnim, childAnim } from '@/helpers/animObjects';
import {motion} from 'framer-motion';

const Days:FC<daysPropsTypes> = ({list}) => {

    return (
        <motion.div {...animWhileInView} variants={parentAnim} className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <AnimWrap className={styles.head}>
                        <motion.div variants={childAnim('bottom')}>
                        <BlockHead
                            title='Считаем дни до заплыва'
                            />
                        </motion.div>
                        
                    </AnimWrap>
                    <div className={styles.body}>
                        {
                            list?.map((item, index) => (
                                <AnimWrap className={styles.item} key={index}>
                                    <motion.div variants={childAnim('bottom')} className={styles.item_in}>
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
                                    </motion.div>
                                </AnimWrap>
                            ))
                        }
                    </div>
                    <AnimWrap className={styles.action}>
                        <motion.div variants={childAnim('bottom')}>
                        <Button
                            text='расчитать стоимость'
                            uppercase
                            />
                        </motion.div>
                    </AnimWrap>
                </div>
            </Container>
        </motion.div>
    )
}

export default Days;