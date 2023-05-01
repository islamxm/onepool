import { Modal, ModalFuncProps } from 'antd';
import styles from './BuyModal.module.scss';
import Image, { StaticImageData } from 'next/image';
import logo from '@/public/assets/logo-main.svg';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { useState } from 'react';
import Text from '../Text/Text';
import SuccessModal from '../SuccessModal/SuccessModal';

interface buyModalPropsType extends ModalFuncProps {
    image?: StaticImageData | string,
    price?: string | number,
    name?: string
}


const BuyModal = (props: buyModalPropsType) => {

    const {image, price, name, onCancel} = props;
    const [load, setLoad] = useState(false)
    const [modal,setModal] = useState(false)
    const [sname, setName] = useState('')
    const [email, setEmail] = useState('')
    const [fonenumber, setFonenumber] = useState('')
    const [comment, setComment] = useState('')
    

    const onSubmit = async () => {
        setLoad(true)
        await fetch(`https://goldensoft.tech/sendpoolform.php?name=${sname}&fonenumber=${fonenumber}&comment=${comment}&email=${email}&namepool=${name}`).finally(() => setLoad(false))
        setModal(true)
        onCancel && onCancel()
    }

    return (
        <>
            <SuccessModal
                open={modal}
                onCancel={() => {
                    setModal(false)
                    onCancel && onCancel()
                }}
                />

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
                        <Input 
                            value={sname}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                            placeholder='ФИО' variant={'dark'}/>
                    </div>
                    <div className={styles.field}>
                        <Input 
                            value={fonenumber}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFonenumber(e.target.value)}
                            placeholder='Телефон' variant={'dark'}/>
                    </div>
                    <div className={styles.field}>
                        <Input 
                            value={email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                            placeholder='E-mail' variant={'dark'}/>
                    </div>
                    <div className={styles.field}>
                        <Text 
                            value={comment}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setComment(e.target.value)}
                            placeholder='Пожелания к заказу...' variant='dark'/>
                    </div>
                </div>
                <div className={styles.action}>
                    <div className={styles.btn}><Button load={load} disabled={!(name && (email || fonenumber))} onClick={onSubmit} text='отправить' uppercase variant='fill'/></div>
                    <div className={styles.ex}>
                    Нажимая кнопку, Вы даете согласие на обработку персональных данных
                    </div>
                </div>
            </div>
        </Modal>
        </>
     
    )
}

export default BuyModal;