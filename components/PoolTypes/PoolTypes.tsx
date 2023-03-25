import styles from './PoolTypes.module.scss';
import {motion} from 'framer-motion';
import { parentAnim, childAnim, animWhileInView } from '@/helpers/animObjects';
import AnimWrap from '../AnimWrap/AnimWrap';
import Container from '../Container/Container';
import BlockHead from '../BlockHead/BlockHead';
import {FC} from 'react';
import { poolTypesPropsTypes } from './types';
import PoolTypeItem from './components/PoolTypeItem';


const PoolTypes:FC<poolTypesPropsTypes> =  ({
    list,
    title
}) => {

    return (
        <motion.div variants={parentAnim} {...animWhileInView} className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <AnimWrap className={styles.head}>
                        <motion.div variants={childAnim('bottom')}>
                            <BlockHead
                            isDark
                            title={title}
                            />
                        </motion.div>
                    </AnimWrap>
                    <div className={styles.body}>
                        {
                            list?.map((item,index) => (
                                <AnimWrap className={styles.item} key={index}>
                                    <PoolTypeItem {...item}/>
                                </AnimWrap>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </motion.div>
    )
}

export default PoolTypes;