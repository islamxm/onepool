import styles from './Vendor.module.scss';
import Container from '@/components/Container/Container';
import BlockHead from '@/components/BlockHead/BlockHead';
import img1 from '@/public/assets/vendor-1.png';
import img2 from '@/public/assets/vendor-2.png';
import img3 from '@/public/assets/vendor-3.png';
import img4 from '@/public/assets/vendor-4.png';
import img5 from '@/public/assets/vendor-5.png';
import img6 from '@/public/assets/vendor-6.png';
import Image from 'next/image';
import Item from './components/Item/Item';
import AnimWrap from '@/components/AnimWrap/AnimWrap';
import { parentAnim, childAnim } from '@/helpers/animObjects';
import {motion} from 'framer-motion';
import { animWhileInView } from '@/helpers/animObjects';

const list = [
    {
        title: 'Подогрев',
        text: 'Плавай в бассейне несмотря на погоду! Вода – один из лучших стимуляторов хорошего настроения!',
        image: img1
    },
    {
        title: 'Обеззараживание',
        text: 'Мы обеспечим чистоту воды и безопасность здоровья с помощью обеззараживания воды.',
        image: img2
    },
    {
        title: 'Фильтрация',
        text: 'Различные системы фильтрации помогут поддерживать качество воды в вашем бассейне.',
        image: img3
    },
    {
        title: 'Противоток',
        text: 'Установим противоточную систему, которая соответствует вашим потребностям.',
        image: img4
    },
    {
        title: 'Гидромассаж Аэромассаж',
        text: 'Установка гидромассажной и аэромассажной системы для расслабления и улучшения кровообращения.',
        image: img5
    },
    {
        title: 'Освещение',
        text: 'Устанавливаем качественные системы освещения для эстетической привлекательности и безопасности бассейна.',
        image: img6
    },
]



const Vendor = () => {

    


    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <motion.div {...animWhileInView} variants={parentAnim}>
                        <AnimWrap className={styles.head}>
                            <motion.div variants={childAnim('bottom')}>
                            <BlockHead
                            title='Оборудование производства Испании и Германии'
                            isDark
                            />
                            </motion.div>
                        </AnimWrap>
                        
                    </motion.div>
                    <motion.div variants={parentAnim} {...animWhileInView} className={styles.body}>

                        {
                            list?.map((item,index) => (
                                <AnimWrap className={styles.item} key={index}>
                                    <Item {...item}/>
                                </AnimWrap>
                            ))
                        }
                       
                    </motion.div>
                </div>
            </Container>
        </div>
    )
}

export default Vendor;