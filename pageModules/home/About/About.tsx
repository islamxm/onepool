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
// import dynamic from "next/dynamic";
// const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
//   ssr: false,
// });
import AnimatedNumbers from '@/helpers/AnimatedNumber';

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