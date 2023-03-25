import Hero from "@/pageModules/home/Hero/Hero";
import About from "@/pageModules/home/About/About";
import Prods from "@/pageModules/home/Prods/Prods";
import Servs from "@/pageModules/home/Servs/Servs";
import Why from "@/components/Why/Why";
import Steps from "@/pageModules/home/Steps/Steps";
import Footer from "@/components/Footer/Footer";
import Feedback from "@/components/Feedback/Feedback";
import { whyItemPropsTypes } from "@/components/Why/types";
import why1 from '@/public/assets/why-1.svg'
import why2 from '@/public/assets/why-2.svg'
import why3 from '@/public/assets/why-3.svg'
import { servItemTypes } from "@/pageModules/home/Servs/types";
//import serv1 from '@/public/assets/serv-1.png';

import serv1 from '@/public/assets/home-serv-1-1.jpg';
import serv2 from '@/public/assets/home-serv-1-2.jpg';
import serv3 from '@/public/assets/home-serv-1-3.jpg';
import serv4 from '@/public/assets/home-serv-1-4.jpg';
import serv5 from '@/public/assets/home-serv-1-5.jpg';
import serv6 from '@/public/assets/home-serv-1-6.jpg';
import serv7 from '@/public/assets/home-serv-2-1.jpg';
import serv8 from '@/public/assets/home-serv-2-2.jpg';
import serv9 from '@/public/assets/home-serv-2-3.jpg';
import serv10 from '@/public/assets/home-serv-3-1.jpg';
import serv11 from '@/public/assets/home-serv-3-2.jpg';
import SmoothScroll from "@/helpers/SmoothScroll";
import { stepItemTypes } from "@/pageModules/home/Steps/types";
import PageLayout from "@/components/PageLayout/PageLayout";


const whList: whyItemPropsTypes[] = [
    {
        head: 'Строим нешаблонные объекты',
        icon: why1,
        text: 'В каждый проект вносим уникальные элементы, что делает бассейн, хаммам или сауну не похожей на другие. Мы не просто создаем красоту, а делаем ее неповторимой!'
    },
    {
        head: 'Гарантия высокого качества',
        icon: why2,
        text: 'Мы гарантируем максимально высокий срок, благодаря проверенным материалам и качественной сборке'
    },
    {
        head: 'Профессионализм сотрудников',
        icon: why3,
        text: 'Профессионально и быстро обслуживаем построенные нами объекты. Готовы подключиться к возведению объекта на любом этапе строительства.'
    }
]


const servList: servItemTypes[] = [
    {
        title:'Реконструкция и модернизация',
        descr: <>
            <p>
            Услуга реконструкции актуальна для бассейнов, построенных 10-20 лет назад. Чаще всего услуга реконструкции требуется бассейнам различных санаториев, пансионатов, гостиниц советских времен постройки после долгого простоя.
            </p>
            <br/>
      
            <p>В реконструкцию входит:</p>
            <br/>
            {/* <br/> */}
            <ul>
                <li>Замена покрытия чаши (пленка ПВХ, мозаика, камень натуральный)</li>
                <li>Обновление трубопровода</li>
                <li>Замена системы фильтрации</li>
                <li>Замена системы дезинфекции</li>
            </ul>
            <br/>
            <p>
            Возможна модернизация с установкой станций автоматической поддержки качества воды без использования хлора.
            </p>
        </>,
        side: 'right',
        images: [serv1,serv2,serv3,serv4,serv5,serv6]
    },
    {
        title:'Дизайн-проект',
        descr: <>
            <p>
            Для каждого клиента наши профессиональные дизайнеры 
            в команде с инженерами-проектировщиками создают индивидуальный дизайн-проект. Учитываются все пожелания заказчика от формы бассейна до изготовления эксклюзивных аттракционов.
            </p>
            <br/>
            <p>Что входит в дизайн-проект?</p>
            <br/>
            <ul>
                <li>Подбор оптимальных размеров бассейна и формы чаши в зависимости от назначения бассейна</li>
                <li>Распределение необходимых зон в бассейне и пространстве вокруг него: для детей, для взрослых, активная зона с аттракционами, с джакузи и т.д.</li>
                <li>Обустройство зоны отдыха вокруг бассейна: терраса - подбор материала, цвета, формы</li>
                <li>Обустройство зоны размещения обслуживающего оборудования: станция очистки, подогрев, фильтрация и т.д.</li>
                <li>Подбор аттракционов: водопад, водяная пушка, противоток (искусственное течение), гидромассаж, гейзер и т.д.</li>
                <li>Разработка дизайна облицовки бассейна и пространства вокруг него: использование нестандартных и уникальных решений.</li>
            </ul>
            <br/>
            <p>Сервисное обслуживание может быть разовым или регулярным.</p>
        </>,
        side: 'left',
        images: [serv7,serv8,serv9]
    },
    {
        title:'Обслуживание',
        descr: <>
            <p>
            Справиться с регулярным обслуживанием бассейна можно самостоятельно, использовав специальные средства 
            и оборудование.
            </p>
            <br/>
            <p>
            Специалисты отдела сервисного обслуживания нашей Компании готовы взять заботу о бассейне на себя.
            </p>
            <p>
            В сервисное обслуживание входит:
            </p>
            <ul>
                <li>Выезд специалиста</li>
                <li>Проверка качества воды</li>
                <li>Проверка работоспособности оборудования</li>
                <li>Замена необходимых компонентов</li>
                <li>Сезонная консервация/расконсервация бассейна</li>
            </ul>
            <br/>
            <p>Сервисное обслуживание может быть разовым или регулярным.</p>
        </>,
        side: 'right',
        images: [serv10,serv11]
    },
]

const stepsList: stepItemTypes[] = [
    {
        label: <>Консультация</>
    },
    {
        label: <>Предварительная смета</>
    },
    {
        label: <>Договор</>
    },
    {
        label: <>Дизайн-проект</>
    },
    {
        label: <>Строительство</>
    },
    {
        label: <>Гарантийное сервисное обслуживание</>
    }
]

const HomePage = () => {

    return (
        <SmoothScroll>
           <PageLayout>
           <Hero/> 
           <About/>
           <Prods/>
           <Servs
            list={servList}
            title="Наши услуги"
            sub="Мы используем современные, эстетичные и инновационные решения, обеспечивая максимальное целебное воздействие и удовольствие от посещения."
            isHomePage
            />
           <Why
            title="За что нас выбирают Клиенты?"
            list={whList}
            haveLink
            />
           <Steps list={stepsList} title="Простые шаги реализации Вашего проекта"/>
           <Feedback
            isLight
            />
           <Footer/>
           </PageLayout>
           
        </SmoothScroll>
    )
}

export default HomePage;
