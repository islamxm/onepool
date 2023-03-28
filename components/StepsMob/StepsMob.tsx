import styles from './StepsMob.module.scss';
import {FC} from 'react';
import { stepPropsTypes } from '@/pageModules/home/Steps/types';
import Container from '../Container/Container';
import BlockHead from '../BlockHead/BlockHead';

const StepsMob:FC<stepPropsTypes> = ({
    list,
    title
}) => {

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <div className={styles.head}>
                        <BlockHead
                            isDark
                            title={title}
                            />
                    </div>
                    <div className={styles.body}>
                        {
                            list?.map((item,index) => (
                                <div className={styles.item} key={index}>
                                    <div className={styles.in}>
                                        <div className={styles.badge}>
                                            <div className={styles.num}>{index + 1}</div>
                                        </div>
                                        <div className={styles.label}>
                                            {
                                                item.label
                                            }
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default StepsMob;