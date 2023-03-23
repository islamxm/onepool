import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Hero from "@/pageModules/spa/Hero/Hero";
import heroBg from '@/public/assets/conc-pool-bg.png';
import { daysItemTypes } from "@/components/Days/types";
import img from '@/public/assets/days-1.png';
import Days from "@/components/Days/Days";
import PoolTypes from "@/pageModules/concrete_pools/PoolTypes/PoolTypes";
import Adv from "@/components/Adv/Adv";
import { advItemTypes } from "@/components/Adv/types";
import advImg1 from '@/public/assets/conc-pool-adv-1.png';
import advImg2 from '@/public/assets/conc-pool-adv-2.png';
import advImg3 from '@/public/assets/conc-pool-adv-3.png';
import advImg4 from '@/public/assets/conc-pool-adv-4.png';
import advIcon1 from '@/public/assets/conc-pool-adv-icon-1.svg';
import advIcon2 from '@/public/assets/conc-pool-adv-icon-2.svg';
import advIcon3 from '@/public/assets/conc-pool-adv-icon-3.svg';
import advIcon4 from '@/public/assets/conc-pool-adv-icon-4.svg';
import advBg from '@/public/assets/conc-pool-adv-bg.png';
import Vendor from "@/pageModules/concrete_pools/Vendor/Vendor";
import Hist from "@/pageModules/concrete_pools/Hist/Hist";
import Why from "@/components/Why/Why";
import { whyItemPropsTypes } from "@/components/Why/types";
import why1 from '@/public/assets/conc-pool-why-1.png';
import why2 from '@/public/assets/conc-pool-why-2.png';
import why3 from '@/public/assets/conc-pool-why-3.png';
import why4 from '@/public/assets/conc-pool-why-4.png';
import why5 from '@/public/assets/conc-pool-why-5.png';
import why6 from '@/public/assets/conc-pool-why-6.png';
import Steps from "@/pageModules/home/Steps/Steps";

const daysList:daysItemTypes[] = [
    {
        day: 1,
        head:'Монтаж опалубки',
        text: 'В первый день мы начинаем работы с выполнения монтажа опалубки.....',
        image: img,
    },
    {
        day: 5,
        head:'Конструкция собрана и залита бетоном',
        text: 'В первый день мы начинаем работы с выполнения монтажа опалубки.....',
        image: img
    },
    {
        day: 10,
        head:'Отделка пленкой и монтаж оборудования',
        text: 'В первый день мы начинаем работы с выполнения монтажа опалубки.....',
        image: img
    },
    {
        day: 14,
        head:'Можно плавать!',
        text: 'В первый день мы начинаем работы с выполнения монтажа опалубки.....',
        image: img
    }
]

const advList: advItemTypes[] = [
    {
        image: advImg1,
        icon: advIcon1,
        title: 'Надежная защита бассейна от агрессивной среды',
        text: <>
            Наша технология позволяет строить быстро и дешево бетонные бассейны без ущерба качеству.
            <br/>
            Чаши, построенные по нашей технологии, зарекомендовали себя как в горной местности, где из-за колебаний почв невозможно использовать альтернативные технологии, так и в любых других условиях.
        </>,
        side: 'left'
    },
    {
        image: advImg2,
        icon: advIcon2,
        title: 'Современная отделка: пленка вместо мозаики',
        text: <>
            Имеет вид дорогой отделки с необычной фактурой <br/>
            Быстрый и легкий ремонт пленки
            при повреждении <br/>
            Пленка - цельное полотно, из которого
            не выпадут отдельные элементы,
            как в случае с мозаикой <br/>
            Имеет большой выбор уникальных фактур, в том числе 3D, что точно невозможно с мозаикой
        </>,
        side: 'right'
    },
    {
        image: advImg3,
        icon: advIcon3,
        title: 'Простое экономичное обслуживание',
        text: <>
            Бетонный бассейн не требует дорогостоящего обслуживания <br/>
            Можно справиться самостоятельно
            или заказать сервис от нашей Компании
        </>,
        side: 'left'
    },
    {
        image: advImg4,
        icon: advIcon4,
        title: 'Возможность установки любого оборудования',
        text: <>
            Гидромассаж, противоток, аэромассаж,
            автоматическая очистка, подогрев, освещение и т.д.
        </>,
        side:'right'
    },
]

const whyList: whyItemPropsTypes[] = [
    {
        icon: why1,
        text: 'Мы установим бассейн с нуля за 14 дней, благодаря большому опыту ',
        head:'Быстрая установка'
    },
    {
        icon: why2,
        text: 'Стенки чаши не скользят под ногами, поэтому риск травмироваться при спуске в воду минимален. ',
        head: 'Безопасность'
    },
    {
        icon: why3,
        text: 'Бассейн может быть любой формы и размера — конфигурация чаши разрабатывается индивидуально для каждого участка. Это позволяет идеально интегрировать его в любой ландшафт.',
        head: 'Уникальность'
    },
    {
        icon: why4,
        text: 'Мы установим бассейн с нуля за 14 дней, благодаря большому опыту ',
        head: 'Выезд инженера на объект для замера и консультации Бесплатно'
    },
    {
        icon: why5,
        text: 'Первые 6 месяцев бесплатно!',
        head: 'Обслуживание бассейна: чистка, консервация/ расконсервация Первые 6 месяцев бесплатно!'
    },
    {
        icon: why6,
        text: 'Бассейн может быть любой формы и размера — конфигурация чаши ',
        head: 'Работаем в рамках 44 и 223 ФЗ'
    }
]

const ConcPage = () => {

    return (
        <>
            <Header/>
            <Hero
                bg={heroBg}
                title="Бетонный бассейн за 14 ДНЕЙ!
                "
                subtitle="Строим бассейны с 2001 года по всей России!"
                />
            <Days list={daysList}/>
            {/* <PoolTypes/> */}
            <Adv bg={advBg} list={advList} title="Почему стоит заказать бетонный бассейн у нас?"/>
            <Vendor/>
            <Hist/>
            <Why list={whyList} title="Почему стоит заказать бассейн у нас?" haveLink/>
            <Steps/>
            <Footer/>
        </>
    )
}

export default ConcPage;