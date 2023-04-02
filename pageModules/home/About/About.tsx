import styles from './About.module.scss';
import Container from '@/components/Container/Container';
import BlockHead from '@/components/BlockHead/BlockHead';
import Image from 'next/image';
import aboutimg from '@/public/assets/about.png';
import AnimWrap from '@/components/AnimWrap/AnimWrap';
import {motion} from 'framer-motion';
import { parentAnim } from '@/helpers/animObjects';
import { animWhileInView } from '@/helpers/animObjects';
import { childAnim } from '@/helpers/animObjects';
import AboutModal from '@/components/AboutModal/AboutModal';
import { useState } from 'react';


import AnimatedNumbers from '@/helpers/AnimatedNumber';

const About = () => {
    const [modal, setModal] = useState(false);


    

    return (
        <motion.div variants={parentAnim} {...animWhileInView} className={styles.wrapper}>
            <AboutModal
                open={modal}
                onCancel={() => setModal(false)}
                />
            <motion.div
                className={styles.bg}
                variants={childAnim('top')}
                />
            <Container>
                <div className={styles.in}>
                    <AnimWrap className={styles.title}>
                        <motion.div
                            variants={childAnim('bottom')}
                            >
                            <BlockHead
                            title='Строим под ключ'
                            />
                        </motion.div>
                        
                    </AnimWrap>
                    <AnimWrap className={styles.subtitle}>
                        <motion.div
                            variants={childAnim('bottom')}
                            >
                            <p>
                            <b>“PoolForm”</b> – это новая компания, образованная объединением трех профессиональных компаний - “Первой бассейной компании”, “KeyBild” и “ManaWell”. Мы совместили наши усилия, чтобы предложить вам высококачественные услуги 
                            оектированию, строительству и обслуживанию бассейнов и спа-комплексов в Краснодарском крае.
                            </p>

                        </motion.div>
                    </AnimWrap>
                    
                    <div className={styles.main}>
                        <AnimWrap className={styles.img}>
                            <motion.div className={styles.img} variants={childAnim('left')}>
                            <Image
                                src={aboutimg}
                                width={577}
                                height={454}
                                alt={""}
                                placeholder={'blur'}
                                />
                            </motion.div>
                        </AnimWrap>
                        {/* <div className={styles.img}>
                            
                        </div> */}
                       
                        
                        <AnimWrap className={styles.descr}>
                            <motion.div variants={childAnim('right')}>
                            <p>
                            <b>“PoolForm”</b> – это новая компания, образованная объединением трех профессиональных компаний - “Первой бассейной компании”, “KeyBild” и “ManaWell”. Мы совместили наши усилия, чтобы предложить вам высококачественные услуги 
                            по проектированию, строительству и обслуживанию бассейнов 
                            и спа-комплексов в Краснодарском крае.
                            <br/>
                            <br/>
                            <b>“Первая бассейная компания”</b> - лидер рынка в сегменте проектирования, строительства и обслуживания бассейнов 
                            и спа-комплексов. Более 20 лет мы занимаемся реализацией проектов любой сложности, от маленьких частных бассейнов 
                            до крупных коммерческих комплексов. Наша компания всегда ориентирована на потребности и желания клиентов, предлагая индивидуальный подход к каждому проекту и предоставляя широкий спектр услуг по всему циклу создания бассейна или 
                            спа-комплекса. Нашим неоспоримым преимуществом является высокое качество услуг, которое мы обеспечиваем благодаря опытным специалистам, использованию качественных материалов и современному оборудованию.
                            </p>
                            <button onClick={() => setModal(true)}>Подробнее</button>
                            </motion.div>
                        </AnimWrap>
                    </div>
                    <div className={styles.ex}>
                        <div  className={styles.item}>
                            <div className={styles.value}>
                            {/* 22 */}
                            {/* <AnimatedNumbers
                                animateToNumber={22}
                                configs={(number, index) => {
                                return { mass: 1, tension: 400 * (index + 1), friction: 140 };
                                }}
                            ></AnimatedNumbers> */}
                            <AnimatedNumbers from={0} to={22}/>
                            </div>
                            <div className={styles.label}>
                            года 
                            на рынке
                            </div>
                        </div>
                        <div  className={styles.item}>
                                <div className={styles.value}>
                                    +
                                {/* <AnimatedNumbers
                                    animateToNumber={730}
                                    // fontStyle={{ fontSize: 32 }}
                                    configs={(number, index) => {
                                    return { mass: 1, tension: 400 * (index + 1), friction: 140 };
                                    }}
                                ></AnimatedNumbers> */}
                                <AnimatedNumbers from={0} to={730}/>
                                </div>
                                <div className={styles.label}>
                                уникальных 
                                проектов
                                </div>
                            </div>
                        
                        <div className={styles.item}>
                                <div className={styles.value}>
                                    +
                                {/* <AnimatedNumbers
                                    animateToNumber={120}
                                    // fontStyle={{ fontSize: 32 }}
                                    configs={(number, index) => {
                                    return { mass: 1, tension: 400 * (index + 1), friction: 140 };
                                    }}
                                ></AnimatedNumbers> */}
                                <AnimatedNumbers from={0} to={120}/>
                                </div>
                                <div className={styles.label}>
                                объектов 
                                на обслуживании
                                </div>
                            </div>
                        <div className={styles.item}>
                                <div className={styles.value}>
                                {/* <AnimatedNumbers
                                    animateToNumber={30}
                                    // fontStyle={{ fontSize: 32 }}
                                    configs={(number, index) => {
                                    return { mass: 1, tension: 400 * (index + 1), friction: 140 };
                                    }}
                                ></AnimatedNumbers> */}
                                <AnimatedNumbers from={0} to={30}/>
                                </div>
                                <div className={styles.label}>
                                брендов оборудования
                                </div>
                            </div>
                    </div>
                </div>
            </Container>
            
        </motion.div>
    )
}

export default About;