import BlockHead from '@/components/BlockHead/BlockHead';
import styles from './Main.module.scss';
import Container from '@/components/Container/Container';
import Tabs from '@/components/Tabs/Tabs';
import { tabItemType } from '@/components/Tabs/types';
import { useEffect, useState } from 'react';
import Portfolio from '@/components/Portfolio/Portfolio';
import { portItemPropsTypes } from '@/components/Portfolio/types';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'

import img_1_1_1 from '@/public/assets/works-1-1-1.png';
import img_1_1_2 from '@/public/assets/works-1-1-2.png';
import img_1_1_3 from '@/public/assets/works-1-1-3.png';
import img_1_2_1 from '@/public/assets/works-1-2-1.png';
import img_1_2_2 from '@/public/assets/works-1-2-2.png';
import img_1_2_3 from '@/public/assets/works-1-2-3.png';
import img_1_3_1 from '@/public/assets/works-1-3-1.png';
import img_1_3_2 from '@/public/assets/works-1-3-2.png';
import img_1_3_3 from '@/public/assets/works-1-3-3.png';
import img_1_4_1 from '@/public/assets/works-1-4-1.png';
import img_1_4_2 from '@/public/assets/works-1-4-2.png';
import img_1_4_3 from '@/public/assets/works-1-4-3.png';

import img_2_1_1 from '@/public/assets/works-2-1-1.png';
import img_2_1_2 from '@/public/assets/works-2-1-2.png';
import img_2_1_3 from '@/public/assets/works-2-1-3.png';
import img_2_2_1 from '@/public/assets/works-2-2-1.png';
import img_2_2_2 from '@/public/assets/works-2-2-2.png';
import img_2_2_3 from '@/public/assets/works-2-2-3.png';
import img_2_3_1 from '@/public/assets/works-2-3-1.png';
import img_2_3_2 from '@/public/assets/works-2-3-2.png';
import img_2_3_3 from '@/public/assets/works-2-3-3.png';
import img_2_4_1 from '@/public/assets/works-2-4-1.png';
import img_2_4_2 from '@/public/assets/works-2-4-2.png';
import img_2_4_3 from '@/public/assets/works-2-4-3.png';

import img_3_1_1 from '@/public/assets/works-3-1-1.png';
import img_3_1_2 from '@/public/assets/works-3-1-2.png';
import img_3_1_3 from '@/public/assets/works-3-1-3.png';
import img_3_2_1 from '@/public/assets/works-3-2-1.png';
import img_3_2_2 from '@/public/assets/works-3-2-2.png';
import img_3_2_3 from '@/public/assets/works-3-2-3.png';
import img_3_3_1 from '@/public/assets/works-3-3-1.png';
import img_3_3_2 from '@/public/assets/works-3-3-2.png';
import img_3_3_3 from '@/public/assets/works-3-3-3.png';
import img_3_4_1 from '@/public/assets/works-3-4-1.png';
import img_3_4_2 from '@/public/assets/works-3-4-2.png';
import img_3_4_3 from '@/public/assets/works-3-4-3.png';

import img_4_1_1 from '@/public/assets/works-4-1-1.png';
import img_4_1_2 from '@/public/assets/works-4-1-2.png';
import img_4_1_3 from '@/public/assets/works-4-1-3.png';
import img_4_2_1 from '@/public/assets/works-4-2-1.png';
import img_4_2_2 from '@/public/assets/works-4-2-2.png';
import img_4_2_3 from '@/public/assets/works-4-2-3.png';
import img_4_3_1 from '@/public/assets/works-4-3-1.png';
import img_4_3_2 from '@/public/assets/works-4-3-2.png';
import img_4_3_3 from '@/public/assets/works-4-3-3.png';
import img_4_4_1 from '@/public/assets/works-4-4-1.png';
import img_4_4_2 from '@/public/assets/works-4-4-2.png';
import img_4_4_3 from '@/public/assets/works-4-4-3.png';
import { useRouter } from 'next/router';


const tabsList:tabItemType[] = [
    {
        id: '1',
        label: 'бетонные бассейны'
    },
    {
        id: '2',
        label:'композитные бассейны'
    },
    {
        id: '3',
        label: 'спа'
    },
    {
        id: '4',
        label: 'бани и сауны'
    }
]


const portList1:portItemPropsTypes[] = [
    {
        side: 'left',
        images: [img_1_1_1,img_1_1_2,img_1_1_3],
        descr: <>
            <h3>
            САУНА ПОД КЛЮЧ (КП &quot;ГРИБКИ&quot;)
            </h3>
            <p>
            <b>Расположение: </b> в помещении
            </p>
            <p>
            <b>Размер: </b> 2,5х2х2,5
            </p>
            <p>
            <b>Отделка: </b> Дальневосточный кедр
            </p>
            <p>
            <b>Назначение: </b> частный
            </p>
            <p>
            Частная сауна под ключ в загородном доме. Установлена угловая электрокаменка SAWO с выносным пультом управления. В сауне установлена LED-подсветка на спинках, соляных вставках 
            и под лежаками. На потолке установлено &quot;звездное небо&quot;. Главной изюминкой сауны стало панорамное остекление одной стены 
            с видом на бассейн.
            </p>
        </>
    },
    {
        side: 'left',
        images: [img_1_2_1, img_1_2_2, img_1_2_3],
        descr: <>
            <h3>
            ДИЗАЙН-ПРОЕКТ СПА КОМПЛЕКСА (БАССЕЙН, ХАММАМ, САУНА) (Г. СЕРПУХОВ)
            </h3>
            <p>
            <b>Расположение: </b> в помещении
            </p>
            <p>
            <b>Отделка: </b> мозаика
            </p>
            <p>
            <b>Тип бассейна: </b> скиммерный
            </p>
            <p>
            <b>Назначение: </b> частный
            </p>
        </>
    },
    {
        side: 'left',
        images: [img_1_3_1, img_1_3_2, img_1_3_3],
        descr: <>
            <h3>
            ХАММАМ (КП &quot;ГОРКИ&quot;)
            </h3>
            <p>
            <b>Расположение: </b> в помещении
            </p>
            <p>
            <b>Отделка: </b> мозаика
            </p>
            <p>
            <b>Назначение: </b> частный
            </p>
        </>
    },
    {
        side: 'left',
        images: [img_1_4_1, img_1_4_2, img_1_4_3],
        descr: <>
            <h3>
            ДИЗАЙН-ПРОЕКТ ХАММАМА (КП &quot;АКВАВИЛЛА&quot;)
            </h3>
            <p>
            <b>Расположение:</b> В помещении
            </p>
            <p>
            <b>Размер:</b> 3,2х3,2
            </p>
            <p>
            <b>Отделка: </b> Мрамор
            </p>
            <p>
            <b>Назначение: </b> частный
            </p>
        </>
    },
]

const portList2: portItemPropsTypes[] = [
    {
        side: 'left',
        images: [img_2_1_1, img_2_1_2, img_2_1_3],
        descr: <>
            <h3>КОМПОЗИТНЫЙ БАССЕЙН РИВЬЕРА 65 (ПОС. КРАТОВО)</h3>
            <p>
            <b>Расположение: </b> уличный
            </p>
            <p>
            <b>Размер: </b> 6,5*3,5*1,5
            </p>
            <p>
            <b>Отделка: </b> Композитный
            </p>
            <p>
            <b>Тип бассейна: </b> скиммерный
            </p>
            <p>
            <b>Назначение:</b> частный
            </p>
            <p>
            Мы получили заказ на демонтаж старого каркасного бассейна. Бассейн долго не использовался, оборудование вышло из строя, 
            а чаша потеряла должный вид. Мы подобрали композитную чашу, которая идеально вписалась в существующий уже котлован. Композитная чаша Ривьера: Длина - 6,5 м, Ширина - 3,5 м, 
            Глубина - 1,5 м, + утепление чаши на производстве (система Termopool) - 4 см. На данном объекте мы заменили старую чашу на новую и демонтировали террасу и установили новую. Так же было заменено все оборудование и установлен низкий Павильон.
            </p>
        </>
    },
    {
        side: 'left',
        images: [img_2_2_1, img_2_2_2, img_2_2_3],
        descr: <>
            <h3>КОМПОЗИТНЫЙ БАССЕЙН ПАРАДИЗ 8 (Г. ОРЕХОВО-ЗУЕВО)</h3>
            <p>
            <b>Расположение: </b> уличный
            </p>
            <p>
            <b>Размер: </b> 8,0*3,7*1,5
            </p>
            <p>
            <b>Отделка: </b> композитный
            </p>
            <p>
            <b>Тип бассейна: </b> скиммерный
            </p>
            <p>
            <b>Назначение: </b> частный
            </p>
            <p>
            Бассейн строили «под ключ»: - копка котлована; - установка чаши; 
            - монтаж оборудования; - обустройство террасы; 
            - установка павильона.
            Композитная чаша Парадиз: Длина – 8 м, Ширина – 3,7 м, 
            Глубина - 1,5 м
            Комплект оборудования: фильтрация; освещение; 
            подогрев от теплового насоса; автоматическая станция дезинфекции; гидромассаж; противоток!
            </p>
        </>
    },
    {
        side: 'left',
        images: [img_2_3_1, img_2_3_2, img_2_3_3],
        descr: <>
            <h3>КОМПОЗИТНЫЙ БАССЕЙН РИВЬЕРА 8 (Г. МОСКВА)</h3>
            <p>
            <b>Расположение: </b> в помещении
            </p>
            <p>
            <b>Размер: </b> 8,0*3,5*1,5
            </p>
            <p>
            <b>Отделка: </b> мозаика
            </p>
            <p>
            <b>Тип бассейна: </b> скиммерный
            </p>
            <p>
            <b>Назначение: </b> частный
            </p>
            <p>
            Во время установки чаши были сложности в заносе. По фото видно как мы это реализовали. Над бассейном возвели легкую, но капитальную конструкцию, чтобы иметь возможность купаться круглый год! Композитная чаша Ривьера:
            Длина – 8 м, Ширина – 3,5 м, Глубина - 1,5 м
            Комплект оборудования: фильтрация; освещение; подогрев от газа; автоматическая станция дезинфекции; гидромассаж; противоток!
            </p>
        </>
    },
    {
        side: 'left',
        images: [img_2_4_1, img_2_4_2, img_2_4_3],
        descr: <>
            <h3>КОМПОЗИТНЫЙ БАССЕЙН РИВЬЕРА 65 (Г. СЕРГИЕВ ПОСАД)</h3>
            <p>
            <b>Расположение: </b> уличный
            </p>
            <p>
            <b>Размер: </b> 6,5*3,5*1,5
            </p>
            <p>
            <b>Отделка: </b> Композитный
            </p>
            <p>
            <b>Тип бассейна: </b> скиммерный
            </p>
            <p>
            <b>Назначение: </b> частный
            </p>
            <p>
            На месте каркасного бассейна был построен шикарный белый бассейн. Композитная чаша Ривьера белого цвета: 
            Длина - 6,5 м, Ширина – 3,5 м, Глубина - 1,5 м+ утепление чаши на производстве (система Termopool) - 4 см. 
            Было установлено оборудование:
            - фильтрация; - освещение; - станция дезинфекции; 
            - тепловой насос для подогрева воды. Вокруг бассейна была обустроена терраса и установлено наматывающее устройство с солярной пленкой.
            </p>
        </>
    },
]

const portList3: portItemPropsTypes[] = [
    {
        side: 'left',
        images: [img_3_1_1, img_3_1_2, img_3_1_3],
        descr: <>
            <h3>БЕТОННЫЙ БАССЕЙН (КП &quot;ДАРНА-2&quot;)</h3>
                <p>
                <b>Расположение: </b> в помещении
                </p>
                <p>
                <b>Размер: </b> 4,4х2,46х1,5
                </p>
                <p>
                <b>Чаша бассейна: </b> бетонная
                </p>
                <p>
                <b>Отделка: </b> Пленка ПВХ
                </p>
                <p>
                <b>Тип бассейна: </b> скиммерный
                </p>
                <p>
                <b>Назначение: </b> частный
                </p>
                <p>
                Бетонный бассейн построен Первой Бассейновой Компанией под ключ в деревне Кашино (КП &quot;Дарна-2&quot;).
                Размеры бассейна - 4,4 х 2,46 х 1,5м. Облицован бассейн текстурным ПВХ лайнером. В бассейне установлены закладные элементы из нержавеющей стали. Кроме того, в бассейне установлены лестница и водные аттракционы - противоток и водопад. Также наша команда занялась обустройством территории вокруг чаши бассейна. Нами были уложены противоскользящие бортовой камень и плитка.
                </p>
        </>
    },
    {
        side: 'left',
        images: [img_3_2_1, img_3_2_2, img_3_2_3],
        descr: <>
            <h3>БЕТОННЫЙ БАССЕЙН (Д. КАРПОВО)</h3>
            <p>
            <b>Расположение: </b> уличный
            </p>
            <p>
            <b>Размер: </b> 14х4
            </p>
            <p>
            <b>Чаша бассейна: </b> бетонная
            </p>
            <p>
            <b>Отделка:</b> керамогранит
            </p>
            <p>
            <b>Тип бассейна: </b> переливной
            </p>
            <p>
            <b>Назначение:</b> частный
            </p>
        </>
    },
    {
        side: 'left',
        images: [img_3_3_1, img_3_3_2,img_3_3_3],
        descr: <>
            <h3>БЕТОННЫЙ БАССЕЙН (ПОС. НИКОЛИНА ГОРА)</h3>
            <p>
            <b>Расположение: </b> уличный
            </p>
            <p>
            <b>Размер: </b> 9,5х5
            </p>
            <p>
            <b>Чаша бассейна: </b> бетонная
            </p>
            <p>
            <b>Отделка: </b> мозаика
            </p>
            <p>
            <b>Тип бассейна: </b> скиммерный
            </p>
            <p>
            <b>Назначение: </b> общественный
            </p>
        </>
    },
    {
        side: 'left',
        images: [img_3_4_1, img_3_4_2, img_3_4_3],
        descr: <>
            <h3>БЕТОННЫЙ БАССЕЙН (КП &quot;ПАВЛОВО-2&quot;)</h3>
            <p>
            <b>Расположение: </b> в помещении
            </p>
            <p>
            <b>Размер: </b> 12х2,8
            </p>
            <p>
            <b>Чаша бассейна: </b> бетонная
            </p>
            <p>
            <b>Отделка: </b> Мозаика
            </p>
            <p>
            <b>Тип бассейна: </b> переливной
            </p>
            <p>
            <b>Назначение: </b> частный
            </p>
            <p>
            Для отделки дна и бортов бассейна использовался ПВХ лайнер под мрамор Haogen (производство Израиль), в состав которого входят бактерицидные и противогрибковые добавки. При монтажных работах использовались закладные детали из нержавеющей стали: скиммер, форсунки, прожекторы. Оборудование: - автоматическая система фильтрации; 
            - фильтровальная установка; - подогрев от газа; - ультрафиолет;
            - аттракцион - гидромассаж. 
            </p>
        </>
    }
]


const portList4: portItemPropsTypes[] = [
    {
        side: 'left',
        images: [img_4_1_1, img_4_1_2, img_4_1_3],
        descr: <>
            <h3>СПА (БАССЕЙН, ХАММАМ, САУНА)</h3>
            <p>
            <b>Расположение: </b> в помещении
            </p>
            <p>
            <b>Размер: </b> 5х3х1,5
            </p>
            <p>
            <b>Чаша бассейна: </b> бетонная
            </p>
            <p>
            <b>Отделка: </b> Лайнер Тех
            </p>
            <p>
            <b>Тип бассейна: </b> скиммерный
            </p>
            <p>
            <b>Назначение: </b> частный
            </p>
            <p>
            В центре Москвы в историческом здании построили компактную, но полноценную СПА-зону: 
            - Бассейн 5х3х1,5 облицовка лайнеромПВХ, закладные из нержавеющей стали. 
            Из аттракционов - гейзер и противоток,позволяющий даже при небольшой длине полноценно плавать.
            - Хаммам 1,5х2,5 облицовка мозаикой, парогенератор, душевая система.
            - Сауна 1,5 х 2,5 облицовка - ольха, печкаHarvia
            </p>
        </>
    },
    {
        side: 'left',
        images: [img_4_2_1, img_4_2_2, img_4_2_3],
        descr: <>
            <h3>СПА КОМПЛЕКС В ГОРАХ (БАССЕЙН, САУНА, ДЖАКУЗИ)</h3>
            <p>
            <b>Расположение: </b> уличный
            </p>
            <p>
            <b>Размер: </b> 12,5х5
            </p>
            <p>
            <b>Чаша бассейна: </b> бетонная
            </p>
            <p>
            <b>Отделка: </b> мазаика
            </p>
            <p>
            <b>Назначение: </b> общественный
            </p>
            <p>
            В 2016 году нашей компанией был построен СПА-комплекс в современном отеле, который находится на горно-лыжном курорте.<br/>
            1. Открытый всесезонный бассейн 12,5х5м.<br/>
            2. Джакузи (внутренний СПА-бассейн) 2х2м с водопадом.<br/>
            3. Сауна с дровяной печью 2,8х2,8м.
            </p>
        </>
    },
    {
        side: 'left',
        images: [img_4_3_1, img_4_3_2, img_4_3_3],
        descr: <>
            <h3>СПА-КОМПЛЕКС (БАССЕЙН, ХАММАМ, САУНА) (Г. ВОЛОГДА)</h3>
            <p>
            Домашний СПА комплекс построен нашими специалистами в 2014 году в ВологдеКомплекс состоит из:
            <ol>
                <li>
                Бассейн переливной облицован лазурной мозаикой щелевого типа — 10х4х1,45 м с автоматической роллеттой
                </li>
                <li>
                Хаммам в восточном стиле
                </li>
                <li>
                Многофункциональная душевая
                </li>
                <li>
                Русская баня
                </li>
                <li>
                Инфракрасная сауна
                </li>
                <li>
                Окатное ведро
                </li>
                <li>
                Кресло с подогревом и контрастной ванночкой для ног
                </li>
                <li>
                Солевая комната с галогенератором
                </li>
                <li>
                Холодная купель 
                </li>
            </ol>
            </p>
            <p>
            Стены помещения декорированы барельефами ручной работы.
            </p>
        </>
    },
    {
        side: 'left',
        images: [img_4_4_1, img_4_4_2, img_4_4_3],
        descr: <>
            <h3>СПА КОМПЛЕКС (БАССЕЙН, ХАММАМ, САУНА) (КП &quot;ИСТРА КАНТРИ КЛАБ&quot;)</h3>
            <p>
            <b>Расположение: </b> в помещении
            </p>
            <p>
            <b>Размер: </b> 8х4х1,5
            </p>
            <p>
            <b>Чаша бассейна: </b> бетонная
            </p>
            <p>
            <b>Отделка: </b> Лайнер ПВХ
            </p>
            <p>
            <b>Тип бассейна: </b> скиммерный
            </p>
            <p>
            <b>Назначение: </b> частный
            </p>
            <p>
            Для отделки дна и бортов бассейна использовался ПВХ лайнер под мрамор Haogen (производство Израиль), в состав которого входят бактерицидные и противогрибковые добавки. При монтажных работах использовались закладные детали из нержавеющей стали: скиммер, форсунки, прожекторы. Оборудование: - автоматическая система фильтрации; 
            - фильтровальная установка; - подогрев от газа; - ультрафиолет;
            - аттракцион - гидромассаж. 
            </p>
        </>
    }
]

const Main = () => {
    const [activeTab, setActiveTab] = useState<string | undefined>('1')
    const router = useRouter()

    useEffect(() => {
        if(router?.query?.tab && typeof router?.query?.tab === 'string') {
            setActiveTab(router?.query?.tab)
        }
    }, [router])

    const switchTab = (tab?: string) => {
        switch(tab) {
            case '1':
                return (
                    <Portfolio
                        list={portList1}
                        />
                )
            case '2':
                return (
                    <Portfolio
                        list={portList2}
                        />
                )
            case '3':
                return (
                    <Portfolio
                        list={portList3}
                        />
                )
            case '4':
                return (
                    <Portfolio
                        list={portList4}
                        />
                )
            default: 
                return null
        }
    }

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <div className={styles.top}>
                        <div className={styles.title}>
                            <BlockHead
                                title='Портфолио реализованных работ'
                                />
                        </div>
                        <div className={styles.tabs}>
                            <Tabs
                                isLight
                                onSelect={setActiveTab}
                                activeTab={activeTab}
                                list={tabsList}
                                />
                        </div>
                    </div>
                    <div className={styles.body}>
                        {switchTab(activeTab)}
                    </div>
                    <div className={styles.nav}>
                        {
                            tabsList[tabsList.findIndex(i => i?.id === activeTab) - 1]?.label ? (
                                <div 
                                    onClick={() => setActiveTab(tabsList[tabsList.findIndex(i => i?.id === activeTab) - 1]?.id)}
                                    className={`${styles.item} ${styles.prev}`}>
                                    <FiChevronLeft/>
                                    {tabsList[tabsList.findIndex(i => i?.id === activeTab) - 1]?.label}
                                </div>
                            ) : null
                        }
                        {
                            tabsList[tabsList.findIndex(i => i?.id === activeTab) + 1]?.label ? (
                                <div 
                                    onClick={() => setActiveTab(tabsList[tabsList.findIndex(i => i?.id === activeTab) + 1]?.id)}
                                    className={`${styles.item} ${styles.next}`}>
                                    {tabsList[tabsList.findIndex(i => i?.id === activeTab) + 1]?.label}
                                    <FiChevronRight/>
                                </div>
                            ) : null
                        }
                        
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Main;