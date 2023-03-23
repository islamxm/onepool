import styles from './PoolTypes.module.scss';
import Container from '@/components/Container/Container';
import BlockHead from '@/components/BlockHead/BlockHead';
import img1 from '@/public/assets/pooltypes-1.png';
import img2 from '@/public/assets/pool-types-2.png';
import Image from 'next/image';


const PoolTypes = () => {
    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <div className={styles.head}>
                        <BlockHead
                            isDark
                            title='Типы бетонных бассейнов'
                            />
                    </div>
                    <div className={styles.body}>
                        <div className={styles.item}>
                            <div className={styles.item_in}>
                                <div className={styles.img}>
                                    <Image 
                                        src={img1}
                                        alt=""
                                        />
                                </div>
                                <div className={styles.descr}>
                                    <div className={styles.title}>Скиммерные</div>
                                    <div className={styles.text}>
                                        Уровень воды на 15 см ниже борта, вода переливается через отверстия – скиммеры.<br/>
                                        <span>Плюсы:</span>
                                        {/* простая конструкция, легкий монтаж;<br/>
                                        экономия: на 10-15% дешевле переливного бассейна;<br/>
                                        отсутствие необходимости в установке ёмкости ниже уровня воды.
                                        <span>Минусы:</span>
                                        вода находится ниже уровня кромки бассейна,
                                        из-за чего он зрительно кажется меньше.
                                        Уровень воды на 15 см ниже борта, вода переливается через отверстия – скиммеры.<br/>
                                        <span>Плюсы:</span>
                                        простая конструкция, легкий монтаж;<br/>
                                        экономия: на 10-15% дешевле переливного бассейна;<br/>
                                        отсутствие необходимости в установке ёмкости ниже уровня воды.
                                        <span>Минусы:</span>
                                        вода находится ниже уровня кромки бассейна,
                                        из-за чего он зрительно кажется меньше. */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default PoolTypes;