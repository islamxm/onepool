import styles from './Calc.module.scss';
import Container from '../Container/Container';
import BlockHead from '../BlockHead/BlockHead';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Text from '../Text/Text';
import { useState } from 'react';
import SuccessModal from '../SuccessModal/SuccessModal';




const Calc = () => {
    const [load, setLoad] = useState(false)
    const [modal, setModal] = useState(false)

    const [comment, setComment] = useState('')
    const [widthpool, setwidthpool] = useState('')
    const [lengthpool, setlengthpool] = useState('')
    const [depthpool, setdepthpool] = useState('')
    const [depthpool2, setdepthpool2] = useState('')
    const [counterflow, setcounterflow] = useState('')
    const [heating, setheating] = useState('')
    const [hydromassage, sethydromassage] = useState('')
    const [aeromassage, setaeromassage] = useState('')
    const [coverage, setcoverage] = useState('')
    const [rollerblind, setrollerblind] = useState('')
    const [pavilion, setpavilion] = useState('')
    const [terrace, setterrace] = useState('')

    const [name, setName] = useState('')
    const [fonenumber, setFonenumber] = useState('')


    const onSubmit = async () => {
        setLoad(true)
        await fetch(`https://goldensoft.tech/sendpoolform.php?name=${name}&fonenumber=${fonenumber}&comment=${comment}&widthpool=${widthpool}&lengthpool=${lengthpool}&depthpool=${depthpool}&depthpool2=${depthpool2}&counterflow=${counterflow}&heating=${heating}&hydromassage=${hydromassage}&aeromassage=${aeromassage}&coverage=${coverage}&rollerblind=${rollerblind}&pavilion=${pavilion}&terrace=${terrace}`).then(res => {
            
        }).finally(() => {
            setLoad(false)
            setModal(true)
        })
        
    }


    return (
        <div className={styles.wrapper}>
            <SuccessModal open={modal} onCancel={() => setModal(false)}/>
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
                                        <div className={styles.input}>
                                            <Input 
                                                value={widthpool}
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setwidthpool(e.target.value)}
                                                variant='dark' 
                                                placeholder='Введите данные'/>
                                        </div>
                                        <div className={styles.label}>Желаемая ширина бассейна</div>
                                    </div>
                                </div>
                                <div className={styles.row}>
                                    <div className={styles.field}>
                                        <div className={styles.input}>
                                            <Input
                                                value={lengthpool}
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setlengthpool(e.target.value)}
                                                variant='dark' 
                                                placeholder='Введите данные'/>
                                        </div>
                                        <div className={styles.label}>Желаемая длина бассейна</div>
                                    </div>
                                </div>
                                <div className={styles.row}>
                                    <div className={styles.field}>
                                        <div className={styles.input}>
                                            <Input 
                                                value={depthpool}
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setdepthpool(e.target.value)}
                                                variant='dark' 
                                                placeholder='Введите данные'/>
                                        </div>
                                        <div className={styles.label}>Желаемая глубина бассейна</div>
                                    </div>
                                </div>
                                <div className={styles.row}>
                                    <div className={styles.checkbox}>
                                        <input 
                                            checked={depthpool2 == '1' ? true : false}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => e.target.checked ? setdepthpool2('1') : setdepthpool2('')}
                                            type="checkbox" id='1'/>
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
                                        <input 
                                            checked={counterflow == '1' ? true : false}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => e.target.checked ? setcounterflow('1') : setcounterflow('')}
                                            type="checkbox" id='2'/>
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
                                        <input 
                                            checked={heating == '1' ? true : false}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => e.target.checked ? setheating('1') : setheating('')}  
                                            type="checkbox" id='3'/>
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
                                        <input 
                                            checked={hydromassage == '1' ? true : false}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => e.target.checked ? sethydromassage('1') : sethydromassage('')} 
                                            type="checkbox" id='4'/>
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
                                        <input 
                                            checked={aeromassage == '1' ? true : false}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => e.target.checked ? setaeromassage('1') : setaeromassage('')} 
                                            type="checkbox" id='5'/>
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
                                        <input 
                                            checked={coverage == '1' ? true : false}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => e.target.checked ? setcoverage('1') : setcoverage('')} 
                                            type="checkbox" id='6'/>
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
                                        <input 
                                            checked={rollerblind == '1' ? true : false}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => e.target.checked ? setrollerblind('1') : setrollerblind('')} 
                                            type="checkbox" id='7'/>
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
                                        <input 
                                            checked={pavilion == '1' ? true : false}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => e.target.checked ? setpavilion('1') : setpavilion('')} 
                                            type="checkbox" id='8'/>
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
                                        <input 
                                            checked={terrace == '1' ? true : false}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => e.target.checked ? setterrace('1') : setterrace('')} 
                                            type="checkbox" id='9'/>
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
                                <div className={styles.fields}>
                                    <div className={styles.field}>
                                        <Input
                                            value={name}
                                            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                                            variant='dark'
                                            placeholder='Имя'
                                            />
                                    </div>
                                    <div className={styles.field}>
                                        <Input
                                            value={fonenumber}
                                            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setFonenumber(e.target.value)}
                                        variant='dark'
                                            placeholder='Телефон'
                                            />
                                    </div>
                                </div>
                                <Text 
                                    value={comment}
                                    onChange={(e:React.ChangeEvent<HTMLTextAreaElement>) => setComment(e.target.value)}
                                    height={100}
                                    variant={'dark'}
                                    placeholder='Напишите Ваши пожелания'/>
                            </div>
                            <div className={styles.action}>
                                <Button 
                                    load={load}
                                    onClick={onSubmit}
                                    uppercase text='расчитать стоимость' variant={'bordered'}/>
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