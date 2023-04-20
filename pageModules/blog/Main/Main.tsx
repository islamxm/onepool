import styles from './Main.module.scss';
import Container from '@/components/Container/Container';
import Badge from '@/components/Badge/Badge';
import Nav from '../Nav/Nav';
import { values } from '@/data/blogdata';
import switchBlogTag from '@/helpers/switchBlogTag';

const Main = ({
    children,
    title,
    tag
}: {
    children?: React.ReactNode,
    title: string,
    tag: values
}) => {

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <div className={styles.head}>
                        <div className={styles.top}>
                            {/* <div className={styles.date}>12 марта 2023</div> */}
                            <div className={styles.kw}><Badge label={switchBlogTag(tag).label} bgColor={switchBlogTag(tag).bgColor}/></div>
                        </div>
                        <h2 className={styles.title}>
                            {title}
                        </h2>
                    </div>
                    <div className={styles.body}>
                        {children}
                    </div>
                    
                </div>
            </Container>
        </div>
    )
}

export default Main;