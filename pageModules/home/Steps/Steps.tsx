import styles from './Steps.module.scss';
import Container from '@/components/Container/Container';
import BlockHead from '@/components/BlockHead/BlockHead';
const Steps = () => {

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <div className={styles.head}>
                        <BlockHead
                            title='Простые шаги реализации Вашего проекта'
                            isDark
                            />
                    </div>
                    <div className={styles.body}>
                        
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Steps;