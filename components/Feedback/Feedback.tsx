import styles from './Feedback.module.scss';
import Container from '../Container/Container';
import Input from '../Input/Input';
import Text from '../Text/Text';
import Button from '../Button/Button';
import {BsCheck2} from 'react-icons/bs';
import { parentAnim } from '@/helpers/animObjects';
import {motion} from 'framer-motion';
import { childAnim } from '@/helpers/animObjects';
import { animWhileInView } from '@/helpers/animObjects';
import AnimWrap from '../AnimWrap/AnimWrap';



const Feedback = ({
    isLight = true
}: {
    isLight: boolean
}) => {

    return (
        <motion.div variants={parentAnim} {...animWhileInView} className={`${styles.wrapper} ${!isLight ? styles.dark : '' }`}>
            <AnimWrap>
            <Container>
                <motion.div variants={childAnim('bottom')} className={styles.in}>
                    <div className={`${styles.part} ${styles.descr}`}>
                        <h2 className={styles.title}>
                            <span>Остались вопросы?</span>
                            Наши специалисты ответят на них!
                        </h2>
                        <div className={styles.text}>
                            <p>
                                Если у вас возникли вопросы, оставьте заявку и наш специалист ответит вам в течение 30 минут.
                            </p>
                        </div>
                        <div className={styles.ex}>
                            <div className={styles.head}>
                                Бесплатные консультации
                            </div>
                            <div className={styles.body}>
                                Ответим на все вопросы по технологии и этапам монтажа
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.part} ${styles.form}`}>
                        <div className={styles.body}>
                        <div className={styles.field}>
                            <Input
                                placeholder='Имя'
                                variant={!isLight ? 'dark' : 'light'}
                                />
                        </div>
                        <div className={styles.field}>
                            <Input
                                placeholder='Телефон'
                                variant={!isLight ? 'dark' : 'light'}
                                />
                        </div>
                        <div className={styles.field}>
                            <Text
                                height={90}
                                variant={!isLight ? "dark" : 'light'}
                                />
                        </div>
                        </div>
                        <div className={styles.action}>
                            <Button
                                text='отправить'
                                variant='fill'
                                style={{
                                    padding: '22px 72px'
                                }}
                                uppercase
                                />
                        </div>
                        <div className={styles.link}>
                        Нажимая кнопку, Вы даете согласие на
                        <a href="">обработку персональных данных</a>
                        </div>
                    </div>
                </motion.div>
            </Container>
            </AnimWrap>
         
        </motion.div>
    )
}

export default Feedback;