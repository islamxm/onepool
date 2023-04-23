import styles from './Coating.module.scss';
import Container from '@/components/Container/Container';
import BlockHead from '@/components/BlockHead/BlockHead';
import img1 from '@/public/assets/conc-coat-1.png';
import img2 from '@/public/assets/conc-coat-2.png';
import img3 from '@/public/assets/conc-coat-3.png';
import Image from 'next/image';
import {motion} from 'framer-motion';
import { parentAnim,childAnim,animWhileInView } from '@/helpers/animObjects';
import AnimWrap from '@/components/AnimWrap/AnimWrap';

const list = [
    {
        image: img1,
        title: 'Роллета',
        text: <>
            <ul>
                <li>Уменьшение испарения воды и расхода реагентов.</li>
                <li>Защита бассейна от мусора и пыли.</li>
                <li>Сокращение расходов на подогрев воды.</li>
            </ul>
            
            
        </> 
    },
    {
        image: img2,
        title: 'Павильон',
        text: <>
            <ul>
                <li>Уникальные и стандартные конструкции, защита бассейна от сора.</li>
                <li>Защита взрослых и детей от случайного падения в воду.</li>
                <li>Экономия энергии на подогрев воды.</li>
                <li>Возможность значительно продлить плавательный сезон.</li>
            </ul>
            
           
            
        </>
    },
    {
        image: img3,
        title: 'Терраса',
        text: <>
            <ul>
                <li>Индивидуальное решение любого уровня сложности.</li>
                <li>Защита взрослых и детей от случайного падения в воду.</li>
                <li>Антискользящее покрытие.</li>
                <li>Поверхность не нагревается на солнце.</li>
                <li>Всегда приятно ходить босиком.</li>
                <li>Эстетичный внешний вид.</li>
            </ul>
           
        </>
    },
]




const Coating = () => {

    return (
        <motion.div variants={parentAnim} {...animWhileInView} className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <AnimWrap className={styles.head}>
                        <motion.div variants={childAnim('bottom')}>
                        <BlockHead title='Покрытие и обустройство' isDark/>
                        </motion.div>
                    </AnimWrap>
                    <div className={styles.body}>
                        {
                            list?.map((item,index) => (
                                <AnimWrap className={styles.item} key={index}>
                                    <motion.div variants={childAnim('bottom')} className={styles.item_in}>
                                        <div className={styles.image}>
                                            <Image src={item.image} alt=""/>
                                        </div>
                                        <div className={styles.descr}>
                                            <div className={styles.title}>
                                                <div className={styles.title_el}>{item.title}</div>
                                            </div>
                                            <div className={styles.text}>
                                                {item.text}
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimWrap>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </motion.div>
    )
}

export default Coating;