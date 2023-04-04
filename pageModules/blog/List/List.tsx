import BlockHead from "@/components/BlockHead/BlockHead";
import styles from './List.module.scss';
import Container from "@/components/Container/Container";
import Item from "../Item/Item";
import Badge from "@/components/Badge/Badge";
import Pag from "../Pag/Pag";
const List = () => {

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <div className={styles.head}>
                        <BlockHead title="Блог"/>
                    </div>
                        <div className={styles.kw}>
                        <div className={styles.kw_item}><Badge label='КОМПОЗИТНЫЕ бассейны'/></div>
                        <div className={styles.kw_item}><Badge bgColor='#1E8CF1' label='ЖЕЛЕЗНЫЕ бассейны'/></div>
                        <div className={styles.kw_item}><Badge bgColor='#288FAF' label='бетонные бассейны'/></div>
                        <div className={styles.kw_item}><Badge bgColor='#36C591' label='СПА'/></div>
                        <div className={styles.kw_item}><Badge bgColor='#ED8B6D' label='БАНИ'/></div>
                        <div className={styles.kw_item}><Badge bgColor='#DFB072' label='САУНЫ'/></div>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.item}>
                            <Item/>
                        </div>
                    </div>
                    <div className={styles.action}>
                        <Pag/>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default List;