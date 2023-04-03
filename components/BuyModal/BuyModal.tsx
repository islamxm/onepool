import { Modal, ModalFuncProps } from 'antd';
import styles from './BuyModal.module.scss';
import Image, { StaticImageData } from 'next/image';
import logo from '@/public/assets/logo-main.svg';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Text from '../Text/Text';


interface buyModalPropsType extends ModalFuncProps {
    image?: StaticImageData | string,
    price?: string | number,
    name?: string
}


const BuyModal = (props: buyModalPropsType) => {

    const {image, price, name} = props;

    return (
        <Modal {...props} width={600} className={styles.wrapper}>
            <div className={styles.head}>
                <span>Оформление заявки</span>
                {name}
            </div>
            <div className={styles.main}>
                <div className={`${styles.img} ${!image ? styles.none : ''}`}>
                    <Image src={image ? image : logo} alt=''/>
                </div>
                <div className={styles.price}>
                    {price} ₽
                </div>
            </div>
            <div className={styles.form}>
                <div className={styles.form_main}>
                    <div className={styles.field}>
                        <Input placeholder='ФИО' variant={'dark'}/>
                    </div>
                    <div className={styles.field}>
                        <Input placeholder='Телефон' variant={'dark'}/>
                    </div>
                    <div className={styles.field}>
                        <Input placeholder='E-mail' variant={'dark'}/>
                    </div>
                    <div className={styles.field}>
                        <Text placeholder='Пожелания к заказу...' variant='dark'/>
                    </div>
                </div>
                <div className={styles.action}>
                    <div className={styles.btn}><Button text='отправить' uppercase variant='fill'/></div>
                    <div className={styles.ex}>
                    Нажимая кнопку, Вы даете согласие на обработку персональных данных
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default BuyModal;