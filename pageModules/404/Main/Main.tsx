import styles from './Main.module.scss';
import Image from 'next/image';
import img from '@/public/assets/404.png';
import Button from '@/components/Button/Button';
import Router from 'next/router';
import Container from '@/components/Container/Container';

const Main = () => {

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                <div className={styles.body}>
                <h2 className={styles.head}>
                    Упс... ошибка!Страница не найдена
                </h2>
                <div className={styles.text}>
                Мы обязательно исправим это, а пока вернитесь 
                на главную страницу.
                </div>
                <div className={styles.action}>
                    <Button uppercase variant={'fill'} text='на главную' onClick={() => Router.push('/')}/>
                </div>
            </div>
            <div className={styles.img}>
                <Image src={img} alt=''/>
            </div>
                </div>
            </Container>
            
            
        </div>
    )
}

export default Main;