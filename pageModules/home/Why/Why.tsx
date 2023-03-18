import styles from './Why.module.scss';
import BlockHead from '@/components/BlockHead/BlockHead';
import Container from '@/components/Container/Container';
import Image from 'next/image';
import img1 from '@/public/assets/why-1.svg'
import img2 from '@/public/assets/why-2.svg'
import img3 from '@/public/assets/why-3.svg'
import Button from '@/components/Button/Button';

const Why = () => {

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <div className={styles.head}>
                        <BlockHead
                            title='За что нас выбирают Клиенты?'
                            />
                    </div>
                    <div className={styles.body}>
                        <div className={styles.item}>
                            <div className={styles.icon}>
                                <Image
                                    src={img1}
                                    width={50}
                                    height={50}
                                    alt=""
                                    />
                            </div>
                            <h3 className={styles.title}>
                            Строим нешаблонные объекты
                            </h3>
                            <div className={styles.text}>
                                <p>
                                В каждый проект вносим уникальные элементы, что делает бассейн, хаммам или сауну не похожей на другие. Мы не просто создаем красоту, а делаем ее неповторимой!
                                </p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.icon}>
                                <Image
                                    src={img2}
                                    width={50}
                                    height={50}
                                    alt=""
                                    />
                            </div>
                            <h3 className={styles.title}>
                            Гарантия высокого качества
                            </h3>
                            <div className={styles.text}>
                                <p>
                                В каждый проект вносим уникальные элементы, что делает бассейн, хаммам или сауну не похожей на другие. Мы не просто создаем красоту, а делаем ее неповторимой!
                                </p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.icon}>
                                <Image
                                    src={img3}
                                    width={50}
                                    height={50}
                                    alt=""
                                    />
                            </div>
                            <h3 className={styles.title}>
                            Профессионализм сотрудников
                            </h3>
                            <div className={styles.text}>
                                <p>
                                В каждый проект вносим уникальные элементы, что делает бассейн, хаммам или сауну не похожей на другие. Мы не просто создаем красоту, а делаем ее неповторимой!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.action}>
                        <Button
                            style={{
                                padding: '22px 72px'
                            }}
                            uppercase
                            text='Задать вопрос'
                            variant={'fill'}
                            />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Why;