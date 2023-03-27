import {Modal} from 'antd';
import { ModalFuncProps } from 'antd';
import styles from './AboutModal.module.scss';
import {FC} from 'react';
import BlockHead from '../BlockHead/BlockHead';
import AnimatedNumbers from '@/helpers/AnimatedNumber';

const AboutModal:FC<ModalFuncProps> = (props) => {

    return (
        <Modal
            {...props}
            width={1150}
            className={styles.wrapper}
            >
            <div className={styles.in}>
                <div className={styles.head}>
                    <BlockHead
                        title='О компании'
                        />
                </div>
                <div className={styles.body}>
                    <p>
                    <b>“PoolForm”</b> – это новая компания, образованная объединением трех профессиональных компаний - “Первой бассейной компании”, “KeyBild” и “ManaWell”. Мы совместили наши усилия, чтобы предложить вам высококачественные услуги по проектированию, строительству и обслуживанию бассейнов и спа-комплексов в Краснодарском крае.
                    <br/>
                    <br/>
                    <b>“PoolForm”</b> – это новая компания, образованная объединением трех профессиональных компаний - “Первой бассейной компании”, “KeyBild” и “ManaWell”. Мы совместили наши усилия, чтобы предложить вам высококачественные услуги по проектированию, строительству и обслуживанию бассейнов 
и спа-комплексов в Краснодарском крае.
                    <br/>
                    <br/>
                    <b>“Первая бассейная компания”</b> - лидер рынка в сегменте проектирования, строительства 
                    и обслуживания бассейнов и спа-комплексов. Более 20 лет мы занимаемся реализацией проектов любой сложности, от маленьких частных бассейнов до крупных коммерческих комплексов. Наша компания всегда ориентирована на потребности и желания клиентов, предлагая индивидуальный подход к каждому проекту и предоставляя широкий спектр услуг по всему циклу создания бассейна 
                    или спа-комплекса. Нашим неоспоримым преимуществом является высокое качество услуг, которое 
                    мы обеспечиваем благодаря опытным специалистам, использованию качественных материалов 
                    и современному оборудованию.
                    <br/>
                    <br/>
                    <b>“KeyBild”</b> - Строительная Компания, которая работает на рынке Краснодарского края уже много лет. Наша экспертиза в строительстве объектов недвижимости любой сложности и обширный портфель реализованных проектов позволяют нам обеспечить высокое качество работ и выполнение заказов 
                    в срок. Наша команда специалистов имеет глубокие знания в области проектирования и строительства, и мы предлагаем комплексные услуги по возведению и обслуживанию бассейнов и спа-комплексов. 
                    Мы готовы создавать индивидуальные проекты под каждого клиента, учитывая все пожелания 
                    и особенности места установки. Работая с KeyBild, вы можете быть уверены в качестве и надежности наших услуг..
                    <br/>
                    <br/>
                    Объединение этих компаний позволило создать новый бренд – PoolForm, который уже завоевал доверие клиентов благодаря своей профессиональной команде и безупречному качеству услуг.
                    <br/>
                    <br/>
                    Основной принцип работы <b>PoolForm</b> – индивидуальный подход к каждому клиенту и создание уникальных проектов, отвечающих всем требованиям и пожеланиям заказчиков. Мы оказываем полный спектр услуг, начиная от проектирования и строительства бассейнов и спа-комплексов и заканчивая их обслуживанием и технической поддержкой.
                    <br/>
                    <br/>
                    Компания <b>PoolForm</b> готова предложить своим клиентам только лучшие и проверенные решения, используя при этом самые современные технологии и материалы. Наша команда профессионалов гарантирует высокое качество работ и своевременное выполнение заказов.

                    </p>
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
        </Modal>
    )
}

export default AboutModal;