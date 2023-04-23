import { Modal, ModalFuncProps } from "antd";
import styles from './FbModal.module.scss';
import Input from "../Input/Input";
import Button from "../Button/Button";
import SuccessModal from "../SuccessModal/SuccessModal";
import { useState } from "react";



const FbModal = (props: ModalFuncProps) => {
    const [load, setLoad] = useState(false)
    const [modal, setModal] = useState(false)
    const [name, setName] = useState('')
    const [fonenumber, setFonenumber] = useState('')

    const onSubmit = async () => {
        setLoad(true)
        const res = await fetch(`https://goldensoft.tech/sendpoolform.php?name=${name}&fonenumber=${fonenumber}`).then(res => {
            if(res?.status === 200) {
                setModal(true)
            }
        }).finally(() => setLoad(false))
        
    }

    return (
        <Modal
            width={450}
            {...props}
            className={styles.wrapper}
            centered
            >
            <SuccessModal
                open={modal}
                onCancel={() => setModal(false)}
                />
            <h4 className={styles.head}>Заявка</h4>
            <div className={styles.subtitle}>Оставьте заявку и мы Вам перезвоним</div>
            <div className={styles.body}>
                <div className={styles.fields}>
                    <div className={styles.item}>
                        <Input
                                 value={name}
                                 onChange={(e:React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                            variant='dark'
                            placeholder='Имя'
                            />
                    </div>
                    <div className={styles.item}>
                        <Input
                          value={fonenumber}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFonenumber(e.target.value)}
                            variant='dark'
                            placeholder='Телефон'
                            type="tel"
                            />
                    </div>
                </div>
                <div className={styles.action}>
                    <Button
                        load={load}
                        disabled={!(name && fonenumber)}
                        onClick={onSubmit}
                        text='отправить'
                        uppercase
                        variant={'fill'}
                        style={{paddingTop: 22,paddingBottom: 22, width: '100%'}}
                        />
                </div>
                <div className={styles.ex}>
                Нажимая кнопку, Вы даете согласие на
                <a href="#">обработку персональных данных</a>
                </div>
            </div>
        </Modal>
    )
}

export default FbModal;