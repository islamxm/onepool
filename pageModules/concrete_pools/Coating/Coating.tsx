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
            уменьшение испарения воды и расхода реагентов<br/>
            защита бассейна от мусора и пыли<br/>
            сокращение расходов на подогрев воды<br/>
        </> 
    },
    {
        image: img2,
        title: 'Павильон',
        text: <>
            уникальные и стандартные конструкции, защита бассейна от сора<br/>
            защита взрослых и детей от случайного падения в воду<br/>
            экономия энергии на подогрев воды<br/>
            возможность значительно продлить плавательный сезон
        </>
    },
    {
        image: img3,
        title: 'Терраса',
        text: <>
            индивидуальное решение любого уровня сложности<br/>
            защита взрослых и детей от случайного падения в воду<br/>
            антискользящее покрытие<br/>
            поверхность не нагревается на солнце
            всегда приятно ходить босиком<br/>
            эстетичный внешний вид
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
                                        <div className={styles.mask}></div>
                                        <div className={styles.image}>
                                            <Image src={item.image} alt=""/>
                                        </div>
                                        <div className={styles.descr}>
                                            <div className={styles.title}>{item.title}</div>
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