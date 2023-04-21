import styles from './Faq.module.scss';
import Container from '../Container/Container';
import BlockHead from '../BlockHead/BlockHead';
import {FC} from 'react';
import { faqItemProps, faqPropsTypes } from './types';
import Item from './components/Item/Item';



const Faq:FC<{list: faqItemProps[]}> = ({list}) => {

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <div className={styles.head}>
                        <BlockHead title='Ответы на Ваши вопросы'/>
                    </div>
                    <div className={styles.body}>
                        {
                            list?.map((item,index) => (
                                <div className={styles.item} key={index}>
                                    <Item {...item}/>
                                </div>
                            ))
                        }                
                    </div>
                </div>
            </Container>
        </div>
    )
}


export default Faq;