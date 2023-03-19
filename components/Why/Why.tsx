import styles from './Why.module.scss';
import BlockHead from '@/components/BlockHead/BlockHead';
import Container from '@/components/Container/Container';
import Image from 'next/image';
import img1 from '@/public/assets/why-1.svg'
import img2 from '@/public/assets/why-2.svg'
import img3 from '@/public/assets/why-3.svg'
import Button from '@/components/Button/Button';
import {FC} from 'react';
import { whyPropsTypes } from './types';




const Why:FC<whyPropsTypes> = ({
    haveLink,
    title,
    list
}) => {

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <div className={styles.head}>
                        <BlockHead
                            title={title}
                            />
                    </div>
                    <div className={styles.body}>
                        {
                            list?.map((item,index) => (
                                <div className={styles.item} key={index}>
                                    {
                                        item.icon ? (
                                            <div className={styles.icon}>
                                                <Image
                                                    src={item.icon}
                                                    width={50}
                                                    height={50}
                                                    alt=""
                                                    />
                                            </div>
                                        ) : null
                                    }
                                    <h3 className={styles.title}>
                                    {item.head}
                                    </h3>
                                    <div className={styles.text}>
                                        <p>
                                        {item.text}
                                        </p>
                                    </div>
                                </div>
                            ))  
                        }
                        
                    </div>
                    {
                        haveLink ? (
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
                        ) : null
                    }
                </div>
            </Container>
        </div>
    )
}

export default Why;