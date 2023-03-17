import styles from './About.module.scss';
import Container from '@/components/Container/Container';
import BlockHead from '@/components/BlockHead/BlockHead';
import Image from 'next/image';
import aboutimg from '@/public/assets/about.png';

const About = () => {

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <div className={styles.title}>
                        <BlockHead
                            title='Строим под ключ'
                            />
                    </div>
                    <div className={styles.subtitle}>
                    Компания  предлагает профессиональное строительство бассейнов по уникальной  технологии. Мы оказываем комплексную услугу «под ключ». Помогаем выбрать проект из каталога, адаптируем его под конкретный участок с разработкой дизайна, производим монтаж нового бассейна или реконструкцию существующего сооружения, осуществляем последующее обслуживание. На всех этапах бесплатно консультируем по особенностям монтажа и эксплуатации бассейна.
                    </div>
                    <div className={styles.main}>
                        <div className={styles.img}>
                            <Image
                                src={aboutimg}
                                width={577}
                                height={454}
                                alt={""}
                                />
                        </div>
                        <div className={styles.descr}>
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
                        </div>
                    </div>
                    <div className={styles.ex}>
                        <div className={styles.item}>
                            <div className={styles.value}>
                            22
                            </div>
                            <div className={styles.label}>
                            года 
                            на рынке
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.value}>
                            730+
                            </div>
                            <div className={styles.label}>
                            уникальных 
                            проектов
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.value}>
                            120+
                            </div>
                            <div className={styles.label}>
                            объектов 
                            на обслуживании
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.value}>
                            30
                            </div>
                            <div className={styles.label}>
                            брендов оборудования
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default About;