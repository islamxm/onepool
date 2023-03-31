import styles from './Key.module.scss';
import Container from '@/components/Container/Container';
import BlockHead from '@/components/BlockHead/BlockHead';

const Key = ({
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
                            title='Дополнительные опции'
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

export default Key;