import styles from './Calc.module.scss';
import Container from '../Container/Container';
import BlockHead from '../BlockHead/BlockHead';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Text from '../Text/Text';

const Calc = () => {
    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <div className={styles.head}>
                        <BlockHead
                            title='Калькулятор'
                            />
                    </div>
                    <div className={styles.body}>
                        <div className={styles.main}>
                            <div className={styles.part}>
                                <div className={styles.row}>
                                    <div className={styles.field}>
                                        <div className={styles.input}><Input variant='dark' placeholder='Введите данные'/></div>
                                        <div className={styles.label}>Желаемая ширина бассейна</div>
                                    </div>
                                </div>
                                <div className={styles.row}>
                                    <div className={styles.field}>
                                        <div className={styles.input}>
                                            <Input variant='dark' placeholder='Введите данные'/>
                                        </div>
                                        <div className={styles.label}>Желаемая длина бассейна</div>
                                    </div>
                                </div>
                                <div className={styles.row}>
                                    <div className={styles.field}>
                                        <div className={styles.input}>
                                            <Input variant='dark' placeholder='Введите данные'/>
                                        </div>
                                        <div className={styles.label}>Желаемая глубина бассейна</div>
                                    </div>
                                </div>
                                <div className={styles.row}>
                                    <div className={styles.checkbox}>
                                        <input type="checkbox" id='1'/>
                                        <label htmlFor="1" className={styles.label}>
                                            <div className={styles.icon}></div>
                                            <div className={styles.text}>
                                            Перепад глубины бассейна <span>(отменить, если необходимо)</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.part}>
                                <div className={styles.row}>
                                    <div className={styles.checkbox}>
                                        <input type="checkbox" id='2'/>
                                        <label htmlFor="2" className={styles.label}>
                                            <div className={styles.icon}></div>
                                            <div className={styles.text}>
                                                Противоток
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className={styles.row}>
                                    <div className={styles.checkbox}>
                                        <input type="checkbox" id='3'/>
                                        <label htmlFor="3" className={styles.label}>
                                            <div className={styles.icon}></div>
                                            <div className={styles.text}>
                                                Подогрев
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className={styles.row}>
                                    <div className={styles.checkbox}>
                                        <input type="checkbox" id='4'/>
                                        <label htmlFor="4" className={styles.label}>
                                            <div className={styles.icon}></div>
                                            <div className={styles.text}>
                                                Гидромассаж
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className={styles.row}>
                                    <div className={styles.checkbox}>
                                        <input type="checkbox" id='5'/>
                                        <label htmlFor="5" className={styles.label}>
                                            <div className={styles.icon}></div>
                                            <div className={styles.text}>
                                                Аэромассаж
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.part}>
                                <div className={styles.row}>
                                    <div className={styles.checkbox}>
                                        <input type="checkbox" id='6'/>
                                        <label htmlFor="6" className={styles.label}>
                                            <div className={styles.icon}></div>
                                            <div className={styles.text}>
                                                Освещение
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className={styles.row}>
                                    <div className={styles.checkbox}>
                                        <input type="checkbox" id='7'/>
                                        <label htmlFor="7" className={styles.label}>
                                            <div className={styles.icon}></div>
                                            <div className={styles.text}>
                                                Роллетное покрытие
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className={styles.row}>
                                    <div className={styles.checkbox}>
                                        <input type="checkbox" id='8'/>
                                        <label htmlFor="8" className={styles.label}>
                                            <div className={styles.icon}></div>
                                            <div className={styles.text}>
                                            Павильон
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className={styles.row}>
                                    <div className={styles.checkbox}>
                                        <input type="checkbox" id='9'/>
                                        <label htmlFor="9" className={styles.label}>
                                            <div className={styles.icon}></div>
                                            <div className={styles.text}>
                                                Терраса
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.ex}>
                            <div className={styles.text}>
                                <Text 
                                    height={100}
                                    variant={'dark'}
                                    placeholder='Напишите Ваши пожелания'/>
                            </div>
                            <div className={styles.action}>
                                <Button uppercase text='расчитать стоимость' variant={'bordered'}/>
                                <span className={styles.s}>Менеджер свяжется для уточнения деталей</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}


export default Calc;