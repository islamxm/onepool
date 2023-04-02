import styles from './Content.module.scss';
import Container from '@/components/Container/Container';
import BlockHead from '@/components/BlockHead/BlockHead';
import img1 from '@/public/assets/comp-cn-1.png';
import img2 from '@/public/assets/comp-cn-2.png';
import img3 from '@/public/assets/comp-cn-3.png';
import img4 from '@/public/assets/comp-cn-4.png';
import Image from 'next/image';

const Content = () => {

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <div className={styles.part}>
                        <div className={styles.head}>
                            <BlockHead
                                title='Наше производство бассейнов из стеклопластика'
                                
                                />
                        </div>
                        <div className={styles.sub}>
                            Ни для кого ни секрет, что качество готового изделия зависит от множества факторов:
                        </div>
                        <div className={styles.body}>
                            <div className={styles.descr}>
                            <p>
                            Технология, которая используется на нашем производстве разработана технологами, с учетом условий эксплуатации в нашей полосе и отточена годами.<br/><br/>
                            Материалы из которых изготавливаются наши чаши проходят тщательный входной контроль. Работаем только с проверенными поставщиками, которые зарекомендовали себя годами. На материалах мы не экономим, поэтому наши чаши и не самые дешевые. Качество не может стоить дешево. А если смотреть на стоимость бассейна &quot;под ключ&quot;, то цена чаши составляет от 20 до 40 процентов. Так стоит ли экономить на чаше?<br/><br/>
                            Контроль качества на всех участках производства (не только входной и на выходе). Система контроля качества разработана с учетом требований ISO 9001. Обеспечивает выполнение всех требований наше ОТК (отдел технического контроля). Да, как в советские добрые времена. Принципы которые были заложены имеют место быть и сейчас, и может быть даже актуальнее, чем в прошлом веке, когда выбор был невелик и на качество мало кто обращал внимание.
                            </p>

                            </div>
                            <div className={styles.images}>
                                <div className={styles.img}>
                                    <Image width={435} height={375} placeholder='blur' src={img1} alt=""/>
                                </div>
                                <div className={styles.img}>
                                    <Image width={435} height={375} placeholder='blur' src={img2} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.part}>
                        <div className={styles.head}>
                            <BlockHead
                                title='Жизнь композитной чаши после производства'
                                />
                        </div>
                        <div className={styles.body}>
                            <div className={styles.images}>
                                <div className={styles.img}>
                                    <Image width={435} height={375} placeholder='blur' src={img3} alt=""/>
                                </div>
                                <div className={styles.img}>
                                    <Image width={435} height={375} placeholder='blur' src={img4} alt=""/>
                                </div>
                            </div>
                            <div className={styles.descr}>
                            <p>
                            Готовые чаши доставляются на объект и уже по месту врезаются закладные, делается обвязка трубами. Нам часто задают вопрос &quot;Можно ли врезать закладные на производстве?&quot;. Заказчики считают, что все что сделано в заводских условиях надежнее. Мы с ними полностью согласны, но только не в вопросе врезки закладных. Наши технологи категорически против этого. Они объясняют это достаточно просто &quot;Пока едет чаша, а дороги сами знаете не во всех наших уголках Родины идеальные, чашу трясет и трясет достаточно долго. Если чаша целая (без закладных), то ей все ни по чем, если уже нарушена целостность, то могут пойти небольшие невидимые трещинки-паутинки. Вы их даже не заметите своим глазом.&quot; Вот поэтому мы везем целую чашу и наши монтажники врезают закладные по месту.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Content;