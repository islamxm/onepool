import styles from './Servs.module.scss';
import Container from '@/components/Container/Container';
import { servItemTypes } from './types';
import { servsPropsTypes } from './types';
import ServItem from './components/ServItem/ServItem';
import {FC} from 'react';
import BlockHead from '@/components/BlockHead/BlockHead';



const Servs:FC<servsPropsTypes> = ({
    list,
    title,
    sub,
    isHomePage
}) => {


    return (
        <div className={styles.wrapper}>
            <div className={styles.in}>
                <div className={styles.head}>
                    <Container>
                        <div className={styles.title}>
                        <BlockHead
                            title={title}
                            />
                    </div>
                    {
                        sub ? (
                            <div className={styles.text}>
                            {sub}
                            </div>
                        ) : null
                    }
                    </Container>
                </div>
                {
                    list?.map((item,index) => (
                        <div className={`${styles.item} ${isHomePage ? styles.homePage : ''}`} key={index}>
                            <ServItem {...item}/>
                        </div>
                    ))
                }
            </div>
           
            
        </div>
    )
}


export default Servs;