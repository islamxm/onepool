import styles from './Pal.module.scss';
import {FC} from 'react';
import { palPropsTypes } from './types';
import BlockHead from '../BlockHead/BlockHead';
import Container from '../Container/Container';
import Item from './components/Item/Item';
import Button from '../Button/Button';

const Pal:FC<palPropsTypes> = ({
    list,
    title,
    subtitle,
    isHasAction
}) => {

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <div className={styles.head}>
                        <BlockHead
                            title={title}
                            />
                    </div>
                    {
                        subtitle ? (
                            <div className={styles.subtitle}>{subtitle}</div>
                        ) : null
                    }
                    <div className={styles.body}>
                        {
                            list?.map((item,index) => (
                                <div className={styles.item} key={index}>
                                    <Item  {...item}/>
                                </div>
                                
                            ))
                        }
                    </div>
                    {
                        isHasAction ? (
                            <div className={styles.action}>
                                <Button
                                    text='получить консультацию'
                                    variant={'fill'}
                                    uppercase
                                    />
                            </div>
                        ) : null
                    }
                </div>
            </Container>
        </div>
    )
}

export default Pal;