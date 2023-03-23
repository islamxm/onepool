import styles from './Adv.module.scss';
import {FC} from 'react';
import { advPropsTypes } from './types';
import BlockHead from '../BlockHead/BlockHead';
import Image from 'next/image';
import Container from '../Container/Container';
import Button from '../Button/Button';

const Adv:FC<advPropsTypes> = ({
    title,
    list,
    bg
}) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.bg}>
                <Image src={bg} alt="" placeholder='blur'/>
            </div>
            <Container>
                <div className={styles.in}>
                    <div className={styles.head}>
                        <BlockHead
                            title={title}
                            />
                    </div>
                    <div className={styles.body}>
                        {
                            list?.map((item,index) => {
                                if(item.side === 'left') {
                                    return (
                                        <div className={styles.part} key={index}>
                                            <div className={styles.descr}>
                                                <h3 className={styles.title}>{item.title}</h3>
                                                <div className={styles.text}>
                                                    <p>
                                                        {item.text}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className={styles.img}>
                                                <div className={styles.img_el}>
                                                    <Image src={item.image} alt=""/>
                                                </div>
                                                <div className={styles.icon}>
                                                    <Image src={item.icon} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                if(item.side === 'right') {
                                    return (
                                        <div className={`${styles.part} ${styles.right}`} key={index}>
                                            <div className={styles.img}>
                                                <div className={styles.img_el}>
                                                    <Image src={item.image} alt=""/>
                                                </div>
                                                <div className={styles.icon}>
                                                    <Image src={item.icon} alt=""/>
                                                </div>
                                            </div>
                                            <div className={styles.descr}>
                                                <h3 className={styles.title}>{item.title}</h3>
                                                <div className={styles.text}>
                                                    <p>
                                                        {item.text}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                    <div className={styles.action}>
                        <Button text='оставить заявку' uppercase variant={'fill'}/>
                    </div>
                </div>
            </Container>
        </div>
    )
}


export default Adv;