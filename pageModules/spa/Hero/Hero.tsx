import styles from './Hero.module.scss';
import Container from '@/components/Container/Container';
import FeedbackSm from '@/components/FeedbackSm/FeedbackSm';
import { heroPropsTypes } from './types';
import {FC} from 'react';
import Image from 'next/image';

const Hero:FC<heroPropsTypes> = ({
    title,
    subtitle,
    bg
}) => {

    return (
        <div className={styles.wrapper}>
            {
                bg ? (
                    <div className={styles.bg}>
                        <Image
                            placeholder={'blur'}
                            src={bg}
                            alt={'bg'}
                            />
                    </div>
                ) : null
            }
            
            <Container>
                <div className={styles.in}>
                    <div className={styles.main}>
                        <h1 className={`${styles.title} page-title `}>
                        {title}
                        </h1>
                        <div className={styles.ex}>
                        {subtitle}
                        </div>
                    </div>
                    <div className={styles.form}>
                        <FeedbackSm/>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Hero;