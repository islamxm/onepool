import {Modal} from 'antd';
import { ModalFuncProps } from 'antd';
import styles from './MoreModal.module.scss';
import {FC} from 'react';
import BlockHead from '@/components/BlockHead/BlockHead';
import AnimatedNumbers from '@/helpers/AnimatedNumber';

interface T extends ModalFuncProps {
    text?: React.ReactNode
}

const MoreModal:FC<T> = (props) => {
    const {text} = props;

    return (
        <Modal
            {...props}
            width={1150}
            className={styles.wrapper}
            >
            <div className={styles.in}>
                {/* <div className={styles.head}>
                    <BlockHead
                        title='О компании'
                        />
                </div> */}
                <div className={styles.body}>
                    {text}
                </div>
            </div>
        </Modal>
    )
}

export default MoreModal;