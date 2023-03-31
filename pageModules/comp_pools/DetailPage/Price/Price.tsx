import styles from './Price.module.scss';
import Container from '@/components/Container/Container';
import BlockHead from '@/components/BlockHead/BlockHead';

const Price = ({
    children
}: {
    children?: React.ReactNode
}) => {

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <div className={styles.head}>
                        <BlockHead
                            title='Стоимость бассейна под ключ включает'
                            />
                    </div>
                    <div className={styles.body}>
                        {children}
                    </div>
                </div>
            </Container>
        </div>
    )
}


export default Price;