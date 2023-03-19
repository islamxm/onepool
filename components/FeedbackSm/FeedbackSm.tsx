import styles from './FeedbackSm.module.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';


const FeedbackSm = () => {

    return (
        <div className={styles.wrapper}>
            <h4 className={styles.head}>Заявка</h4>
            <div className={styles.subtitle}>Оставьте заявку и мы Вам перезвоним</div>
            <div className={styles.body}>
                <div className={styles.fields}>
                    <div className={styles.item}>
                        <Input
                            variant='dark'
                            placeholder='Имя'
                            />
                    </div>
                    <div className={styles.item}>
                        <Input
                            variant='dark'
                            placeholder='Телефон'
                            />
                    </div>
                </div>
                <div className={styles.action}>
                    <Button
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
        </div>
    )
}

export default FeedbackSm;