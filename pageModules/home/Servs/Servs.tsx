import styles from './Servs.module.scss';
import Container from '@/components/Container/Container';
import { servItemTypes } from './types';
import { servsPropsTypes } from './types';
import ServItem from './components/ServItem/ServItem';
import {FC} from 'react';
import BlockHead from '@/components/BlockHead/BlockHead';
import {motion} from 'framer-motion';
import { parentAnim } from '@/helpers/animObjects';
import { animWhileInView } from '@/helpers/animObjects';
import AnimWrap from '@/components/AnimWrap/AnimWrap';
import { childAnim } from '@/helpers/animObjects';


const Servs:FC<servsPropsTypes> = ({
    list,
    title,
    sub,
    isHomePage
}) => {


    return (
        <motion.div variants={parentAnim} {...animWhileInView} className={styles.wrapper}>
            <div className={styles.in}>
                <AnimWrap className={styles.head}>
                    <motion.div variants={childAnim('bottom')}>
                        <Container>
                            <div className={styles.title}>
                            <BlockHead
                                title={title}
                                />
                        </div>
                        {
                            sub ? (
                                <div className={styles.text}>
                                {sub}
                                </div>
                            ) : null
                        }
                        </Container>
                    </motion.div>
                </AnimWrap>
                
                {
                    list?.map((item,index) => (
                        <div className={`${styles.item} ${isHomePage ? styles.homePage : ''}`} key={index}>
                            <ServItem {...item}/>
                        </div>
                    ))
                }
            </div>
           
            
        </motion.div>
    )
}


export default Servs;