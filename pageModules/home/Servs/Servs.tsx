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
        <div className={styles.wrapper}>
            <div className={styles.in}>
                {/* <AnimWrap className={styles.head}>
                    <motion.div variants={childAnim('bottom')}>
                        <Container>
                           
                        {
                            sub ? (
                                <div className={styles.text}>
                                {sub}
                                </div>
                            ) : null
                        }
                        </Container>
                    </motion.div>
                </AnimWrap> */}
                <motion.div {...animWhileInView} variants={parentAnim} className={styles.head}>
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
                {
                    list?.map((item,index) => (
                        <div className={`${styles.item} ${isHomePage ? styles.homePage : ''}`} key={index}>
                            <ServItem {...item}/>
                        </div>
                    ))
                }
            </div>
           
            
        </div>
    )
}


export default Servs;