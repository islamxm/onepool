import SmoothScroll from "@/helpers/SmoothScroll";
import PageLayout from "@/components/PageLayout/PageLayout";
import Hero from "@/pageModules/spa/Hero/Hero";
import bg from '@/public/assets/iron-pools-bg.png';
import { daysItemTypes } from "@/components/Days/types";
import Days from "@/components/Days/Days";
import days1 from '@/public/assets/iron-days-1.png';
import days2 from '@/public/assets/iron-days-2.png';
import days3 from '@/public/assets/iron-days-3.png';
import days4 from '@/public/assets/iron-days-4.png';
import Prods from "@/pageModules/home/Prods/Prods";
import Adv from "@/components/Adv/Adv";
import { advItemTypes } from "@/components/Adv/types";
import adv1 from '@/public/assets/iron-adv-1.png'
import adv2 from '@/public/assets/iron-adv-2.png'
import adv3 from '@/public/assets/iron-adv-3.png'
import adv4 from '@/public/assets/iron-adv-4.png'
import advicon1 from '@/public/assets/iron-adv-icon-1.svg'
import advicon2 from '@/public/assets/iron-adv-icon-2.svg'
import advicon3 from '@/public/assets/iron-adv-icon-3.svg'
import advicon4 from '@/public/assets/iron-adv-icon-4.svg'
import ironadvbg from '@/public/assets/iron-adv-bg.png'
import PoolTypes from "@/components/PoolTypes/PoolTypes";
import { poolTypeItemType } from "@/components/PoolTypes/types";
import irontype1 from '@/public/assets/iron-pool-type-1.png'
import irontype2 from '@/public/assets/iron-pool-type-2.png'
import Hist from "@/pageModules/iron_pools/Hist/Hist";
import Why from "@/components/Why/Why";
import { whyItemPropsTypes } from "@/components/Why/types";
import why1 from '@/public/assets/iron-why-1.svg';
import why2 from '@/public/assets/iron-why-2.svg';
import why3 from '@/public/assets/iron-why-3.svg';
import why4 from '@/public/assets/iron-why-4.svg';
import why5 from '@/public/assets/iron-why-5.svg';
import why6 from '@/public/assets/iron-why-6.svg';
import Steps from "@/pageModules/home/Steps/Steps";
import { stepItemTypes } from "@/pageModules/home/Steps/types";
import Footer from "@/components/Footer/Footer";
import Calc from "@/components/Calc/Calc";
import Faq from "@/components/Faq/Faq";
import StepsMob from "@/components/StepsMob/StepsMob";
const daysList:daysItemTypes[] = [
    {
        image: days1,
        head: 'Монтаж панелей',
        day: 1,
        text: 'В первый день мы начинаем работы с выполнения монтажа панелей.....'
    },
    {
        image: days2,
        head: 'Конструкция собрана ',
        day: 4,
        text: 'В первый день мы начинаем работы с выполнения монтажа опалубки.....'
    },
    {
        image: days3,
        head: 'Отделка пленкой и монтаж оборудования',
        day: 14,
        text: 'В первый день мы начинаем работы с выполнения монтажа опалубки.....'
    },
    {
        image: days4,
        head: 'Можно плавать!',
        day: 21,
        text: 'В первый день мы начинаем работы с выполнения монтажа опалубки.....'
    },
]

const advList: advItemTypes[] = [
    {
        title: 'Простая сборно-разборная конструкция',
        text: 'В случае переезда заново быстро устанавливается на новом месте без строительной техники и шума. Удобно для фитнес-центров, спа-зон, детских учреждений',
        image: adv1,
        icon: advicon1,
        side: 'left'
    },
    {
        title: 'Эксплуатация на улице и в помещении',
        text: 'Панельный бассейн одинаково успешно используется как в уличных условиях, так и в помещении',
        image: adv2,
        icon: advicon2,
        side: 'right'
    },
    {
        title: 'Легковесная конструкция',
        text: <>
            Вес бассейна = вес воды!<br/>
            Безопасно устанавливать панельный бассейн на крышах зданий
        </>,
        image: adv3,
        icon: advicon3,
        side: 'left'
    },
    {
        title: 'Установка с любым уровнем углубления',
        text: 'Самонесущая конструкция наших бассейнов позволяет устанавливать их с любым уровнем заглубления, вплоть до отдельно стоящих',
        image: adv4,
        icon: advicon4,
        side: 'right'
    },
]

const poolList:poolTypeItemType[] = [
    {
        image: irontype1,
        title: 'Скиммерные',
        text: <>
            Уровень воды на 15 см ниже борта, переливается через отверстия – скиммеры.
            <span>Плюсы:</span>
            простая конструкция, легкий монтаж;<br/>
            экономия: на 10-15% дешевле переливного бассейна;<br/>
            отсутствие необходимости в установке ёмкости ниже уровня воды.
            <span>Минусы:</span>
            вода находится ниже уровня кромки бассейна,
            из-за чего он зрительно кажется меньше.
        </>
    },
    {
        image: irontype2,
        title: 'Переливные',
        text: <>
            Бассейн заполняется водой вровень с бортом, вода переливается через решетку по периметру бассейна.
            <span>Плюсы:</span>
            высокий уровень очистки воды;<br/>
            вода заполнена вровень с полом, благодаря этому бассейн зрительно кажется глубже и красивее.<br/>
            <span>Минусы:</span>
            вода находится ниже уровня кромки бассейна,
            из-за чего он зрительно кажется меньше. <br/>
            необходимость в установке ёмкости ниже уровня воды;<br/>
            сложная конструкция и более длительный монтаж.
        </>
    },
] 

const whyList:whyItemPropsTypes[] = [
    {
        icon: why1,
        head: 'Быстрая установка',
        text: 'Мы установим бассейн с нуля за 14 дней, благодаря большому опыту '
    },
    {
        icon: why2,
        head: 'Безопасность',
        text: 'Стенки чаши не скользят под ногами, поэтому риск травмироваться при спуске в воду минимален. '
    },
    {
        icon: why3,
        head: 'Уникальность',
        text: 'Бассейн может быть любой формы и размера — конфигурация чаши разрабатывается индивидуально для каждого участка. Это позволяет идеально интегрировать его в любой ландшафт.'
    },
    {
        icon: why4,
        head: 'Выезд инженера на объект для замера и консультации Бесплатно',
        text: 'Мы установим бассейн с нуля за 14 дней, благодаря большому опыту '
    },
    {
        icon: why5,
        head: 'Обслуживание бассейна: чистка, консервация/ расконсервация Первые 6 месяцев бесплатно!',
        text: 'Первые 6 месяцев бесплатно!'
    },
    {
        icon: why6,
        head: 'Работаем в рамках 44 и 223 ФЗ',
        text: 'Бассейн может быть любой формы и размера — конфигурация чаши '
    }
]

const stepsList: stepItemTypes[] = [
    {label: 'Разработка и подготовка котлована'},
    {label: 'Монтаж опалубки и армирование'},
    {label: 'Бетонирование и оштукатуривание чаши'},
    {label: 'Установка закладных элементов'},
    {label: 'Отделочные работы (облицовка)'},
    {label: 'Монтаж оборудования и пусконаладка'}
]

const IronPage = () => {

    return (
        <SmoothScroll>
            <PageLayout>
                <Hero
                    title="Стальной бассейн за 21 ДЕНЬ!"
                    subtitle="Строим бассейны с 2001 года по всей России!"
                    bg={bg}
                    />    
                <Days
                    list={daysList}
                    /> 
                <Prods/>
                <Adv
                    title="Почему стоит заказать стальной бассейн?"
                    list={advList}
                    bg={ironadvbg}
                    />
                <PoolTypes
                    title="Типы панельных бассейнов"
                    list={poolList}
                    />
                <Hist/>
                <Why title="Почему стоит заказать бассейн у нас?" list={whyList}/>
                <Steps title="Этапы строительства" list={stepsList}/>
                <StepsMob title="Этапы строительства" list={stepsList}/>
                <Calc/>
                <Faq/>
                <Footer/>
            </PageLayout>
        </SmoothScroll>
    )
}

export default IronPage;