import { Modal, ModalFuncProps } from "antd";
import {FC} from 'react'
import styles from './SuccessModal.module.scss';
import {BsCheckLg} from 'react-icons/bs';

const SuccessModal:FC<ModalFuncProps> = (props) => {


    return (
        <Modal
            {...props}
            footer={false}
            className={`${styles.wrapper} modal`}
            >
            <div className={styles.in}>
                <div className={styles.icon}>
                    <BsCheckLg/>
                </div>
                <div className={styles.title}>
                Заявка успешно оформлена!
                </div>
                <div className={styles.text}>
                Спасибо за заявку!<br/>
                Менеджер свяжется с Вами ближайшее время.
                </div>
            </div>
        </Modal>
    )
}


export default SuccessModal;