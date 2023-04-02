import styles from './Adv.module.scss';
import {FC} from 'react';
import { advPropsTypes } from './types';
import BlockHead from '../BlockHead/BlockHead';
import Image from 'next/image';
import Container from '../Container/Container';
import Button from '../Button/Button';
import {motion} from 'framer-motion';
import { parentAnim, childAnim } from '@/helpers/animObjects';
import { animWhileInView } from '@/helpers/animObjects';
import AnimWrap from '../AnimWrap/AnimWrap';


const Adv:FC<advPropsTypes> = ({
    title,
    list,
    bg
}) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.bg}>
                <Image src={bg} alt="" placeholder='blur'/>
            </div>
            <Container>
                <div className={styles.in}>
                    <div className={styles.head}>
                        <BlockHead
                            title={title}
                            />
                    </div>
                    <div className={styles.body}>
                        {
                            list?.map((item,index) => (
                                <motion.div {...animWhileInView} variants={parentAnim} className={`${styles.part} ${styles.right}`} key={index}>
                                    <AnimWrap className={styles.img}>
                                        <motion.div className={styles.img_in} variants={childAnim('left')}>
                                            <div className={styles.img_el}>
                                                <Image src={item.image} alt=""/>
                                            </div>
                                            <div className={styles.icon}>
                                                <Image src={item.icon} alt=""/>
                                            </div>
                                        </motion.div>
                                        
                                    </AnimWrap>
                                    <AnimWrap className={styles.descr}>
                                        <motion.div variants={childAnim('right')}>
                                            <h3 className={styles.title}>{item.title}</h3>
                                            <div className={styles.text}>
                                                <p>
                                                    {item.text}
                                                </p>
                                            </div>
                                        </motion.div>
                                    </AnimWrap>
                                </motion.div>
                            ))
                        }
                    </div>
                    <div className={styles.action}>
                        <Button text='оставить заявку' uppercase variant={'fill'}/>
                    </div>
                </div>
            </Container>
        </div>
    )
}


export default Adv;