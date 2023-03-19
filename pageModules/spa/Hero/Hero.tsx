import styles from './Hero.module.scss';
import Container from '@/components/Container/Container';
import FeedbackSm from '@/components/FeedbackSm/FeedbackSm';

const Hero = () => {

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <div className={styles.main}>
                        <h1 className={`${styles.title} page-title `}>
                        Строительство современных
                        банных спа-комплексов 
                        и Wellness зон под ключ
                        </h1>
                        <div className={styles.ex}>
                        Строим спа с 2001 года по всей России!
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