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
                        <div className={styles.item}>
                            <div className={styles.num}>01</div>
                            <div className={styles.label}>Консультация</div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.num}>02</div>
                            <div className={styles.label}>Предварительная смета</div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.num}>03</div>
                            <div className={styles.label}>Договор</div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.num}>04</div>
                            <div className={styles.label}>Дизайн-проект</div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.num}>05</div>
                            <div className={styles.label}>Строительство</div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.num}>06</div>
                            <div className={styles.label}>Гарантийное сервисное обслуживание</div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Steps;