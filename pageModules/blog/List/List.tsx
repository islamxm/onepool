import BlockHead from "@/components/BlockHead/BlockHead";
import styles from './List.module.scss';
import Container from "@/components/Container/Container";
import Item from "../Item/Item";

const List = () => {

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <div className={styles.head}>
                        <BlockHead title="Блог"/>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.item}>
                            <Item/>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default List;