import styles from './Why.module.scss';
import BlockHead from '@/components/BlockHead/BlockHead';
import Container from '@/components/Container/Container';
import Image from 'next/image';
import img1 from '@/public/assets/why-1.svg'
import img2 from '@/public/assets/why-2.svg'
import img3 from '@/public/assets/why-3.svg'
import Button from '@/components/Button/Button';
import {FC, useState} from 'react';
import { whyPropsTypes } from './types';
import {motion} from 'framer-motion';
import AnimWrap from '../AnimWrap/AnimWrap';
import { childAnim } from '@/helpers/animObjects';
import { parentAnim } from '@/helpers/animObjects';
import { animWhileInView } from '@/helpers/animObjects';
import FbModal from '../FbModal/FbModal';


const Why:FC<whyPropsTypes> = ({
    haveLink,
    title,
    list,
    sub,
    fr
    
}) => {
    const [fb, setFb] = useState(false)


    return (
        <motion.div variants={parentAnim} {...animWhileInView} className={styles.wrapper}>
            
            <FbModal
                onCancel={() => setFb(false)}
                open={fb}
                />
            <Container>
                <div className={styles.in}>
                    <AnimWrap className={styles.head}>
                        <motion.div variants={childAnim('bottom')}>
                            <BlockHead
                                title={title}
                                />
                        </motion.div>
                    </AnimWrap>
                    
                    {
                        sub ? (
                            <AnimWrap className={styles.sub}>
                                <motion.div variants={childAnim('bottom')}>
                                {sub}
                                </motion.div>
                            </AnimWrap>
                        )  : null
                    }
                    
                    <div className={`${styles.body} ${fr ? styles.fr : ''}`}>
                        {
                            list?.map((item,index) => (
                                <AnimWrap className={styles.item} key={index}>
                                        <motion.div variants={childAnim('bottom')} className={`${styles.item_in} ${!item?.text ? styles.auto : ''}`} >
                                        {
                                            item.icon ? (
                                                <div className={styles.icon}>
                                                    <Image
                                                        src={item.icon}
                                                        width={50}
                                                        height={50}
                                                        alt=""
                                                        />
                                                </div>
                                            ) : null
                                        }
                                        <h3 className={styles.title}>
                                        {item.head}
                                        </h3>
                                        <div className={styles.text}>
                                            <p>
                                            {item.text}
                                            </p>
                                        </div>
                                    </motion.div>
                                </AnimWrap>
                                
                            ))  
                        }
                        
                    </div>
                    {
                        haveLink ? (
                            <AnimWrap className={styles.action}>
                                <motion.div variants={childAnim('bottom')}>
                                    <Button
                                        style={{
                                            padding: '22px 72px'
                                        }}
                                        onClick={() => setFb(true)}
                                        uppercase
                                        text='Задать вопрос'
                                        variant={'fill'}
                                        />
                                </motion.div>
                            </AnimWrap>
                        ) : null
                    }
                </div>
            </Container>
        </motion.div>
    )
}

export default Why;