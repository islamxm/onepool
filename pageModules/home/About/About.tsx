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

const About = () => {

    return (
        <motion.div variants={parentAnim} {...animWhileInView} className={styles.wrapper}>
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
                            Компания  предлагает профессиональное строительство бассейнов по уникальной  технологии. Мы оказываем комплексную услугу «под ключ». Помогаем выбрать проект из каталога, адаптируем его под конкретный участок с разработкой дизайна, производим монтаж нового бассейна или реконструкцию существующего сооружения, осуществляем последующее обслуживание. На всех этапах бесплатно консультируем по особенностям монтажа и эксплуатации бассейна.
                        </motion.div>
                    </AnimWrap>
                    
                    <div className={styles.main}>
                        <AnimWrap className={styles.img}>
                            <motion.div variants={childAnim('left')}>
                            <Image
                                src={aboutimg}
                                width={577}
                                height={454}
                                alt={""}
                                />
                            </motion.div>
                        </AnimWrap>
                        {/* <div className={styles.img}>
                            
                        </div> */}
                       
                        
                        <AnimWrap className={styles.descr}>
                            <motion.div variants={childAnim('right')}>
                            <p>
                            Строительство бассейна под ключ - сложный и трудоемкий процесс, но в то же время позволяет воплотить в реальность даже самый смелый проект: любая форма чаши, возможность сделать переменную глубину - от мелководья детской зоны до ныряния с трамплина.
                            <br/>
                            <br/>
                            Множество вариантов и типов отделки - от пленки ПВХ с 3D эффектом до неповторимых мозаичных полотен. Разнообразное современное технологическое оборудование, развлекательные и спортивные водные аттракционы.
                            Многолетний опыт наших специалистов в проектировании и строительстве бассейнов, соответствие российским стандартам (СНиП, СанПин) - гарантия долгосрочного и безопасного пользования бассейном!
                            <br/>
                            <br/>
                            Построим бассейн любой формы и любого размера для частного и общественного пользования. Реализуем ваш проект на всех этапах - от создания технического задания и индивидуального дизайн-проекта до запуска бассейна.
                            </p>
                            </motion.div>
                        </AnimWrap>
                    </div>
                    <div className={styles.ex}>
                        <AnimWrap className={styles.item}>
                            <motion.div variants={childAnim('bottom')} className={styles.item}>
                                <div className={styles.value}>
                                22
                                </div>
                                <div className={styles.label}>
                                года 
                                на рынке
                                </div>
                            </motion.div>
                        </AnimWrap>
                        <AnimWrap className={styles.item}>
                            <motion.div variants={childAnim('bottom')} className={styles.item}>
                                <div className={styles.value}>
                                730+
                                </div>
                                <div className={styles.label}>
                                уникальных 
                                проектов
                                </div>
                            </motion.div>
                        </AnimWrap>
                        
                        <AnimWrap>
                            <motion.div variants={childAnim('bottom')} className={styles.item}>
                                <div className={styles.value}>
                                120+
                                </div>
                                <div className={styles.label}>
                                объектов 
                                на обслуживании
                                </div>
                            </motion.div>
                        </AnimWrap>
                        <AnimWrap>
                            <motion.div variants={childAnim('bottom')} className={styles.item}>
                                <div className={styles.value}>
                                30
                                </div>
                                <div className={styles.label}>
                                брендов оборудования
                                </div>
                            </motion.div>
                        </AnimWrap>
                    </div>
                </div>
            </Container>
            
        </motion.div>
    )
}

export default About;